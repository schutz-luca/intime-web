/**
 * IMPORTS
 */
import { useDispatch } from "react-redux";
import { BiCalendarX } from "react-icons/bi";
import { Card } from "components/card";
import { $CardContent, $CardTitle, $ButtonsContainer, $DeleteButton, $SelectButton } from "components/card/styles";
import { Thumbnail } from "components/thumbnail";
import http from "infra/http";
import { notify } from "infra/notify";
import { formatStringDate, getHoursString } from "utils/dateUtils";
import { ISchedulingCardProps } from "./index.d"
import { $Time } from "./styles"
import { MdLocalPhone } from "react-icons/md";

/**
 * I am the scheduling card, reactive according to provider view or client view
 */
export const SchedulingCard = (props: ISchedulingCardProps) => {

    const provider = props.scheduling?.product?.provider;

    // get dispatch
    const dispatch = useDispatch();

    const deleteScheduling = async () => {
        try {
            if (!confirm('Você deseja mesmo cancelar esse agendamento?'))
                return

            await http.delete(`scheduling/${props?.scheduling?.id}`, { dispatch });

            notify({
                title: 'Sucesso!',
                message: 'Agendamento cancelado',
                type: 'success'
            });
            props.updateList();
        }
        catch (ex) {
            notify({
                title: 'Não foi possível cancelar o agendamento',
                message: 'Tente novamente mais tarde',
                type: 'danger'
            })
        }
    }

    const selectCard = () => props.selectCard({ ...props.scheduling })

    return (
        <Card key={props.scheduling.id} onClick={!props.isProvider && selectCard}>
            <$CardContent>
                <Thumbnail src={props.scheduling.product.cover} />
                <div className="info">
                    <$CardTitle>
                        <h2>{props.scheduling.product.name}</h2>
                        <$Time>
                            <div>
                                <h1>{getHoursString(props.scheduling.startDate)}</h1>
                                <p>Até</p>
                                <h1>{getHoursString(props.scheduling.endDate)}</h1>
                            </div>
                            <p className="date">{formatStringDate(props.scheduling.startDate)}</p>
                        </$Time>
                        {!props.isProvider &&
                            <>
                                <p>{provider?.fullname}</p>
                                <small>{provider?.category?.name}</small>
                            </>
                        }
                    </$CardTitle>
                    <$ButtonsContainer>
                        <$DeleteButton onClick={deleteScheduling}>
                            <BiCalendarX />
                        </$DeleteButton>
                        {!props?.isProvider &&
                            <a href={`tel:${props.scheduling.product.provider.phone}`}>
                                <$SelectButton>
                                    <MdLocalPhone />
                                </$SelectButton>
                            </a>
                        }
                    </$ButtonsContainer>
                </div>
            </$CardContent>
        </Card >
    )
}