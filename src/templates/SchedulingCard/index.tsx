/**
 * IMPORTS
 */
import { useDispatch } from "react-redux";
import { Card } from "components/card";
import { paymentTypes } from "constants/paymentTypes";
import http from "infra/http";
import { notify } from "infra/notify";
import { formatStringDate, getHoursString } from "utils/dateUtils";
import { nameToValue } from "utils/nameToValue";
import { ISchedulingCardProps } from "./index.d"
import { $SelectButton, $Time, $Content, $CardTitle } from "./styles"
import { Thumbnail } from "components/thumbnail";

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

    return (
        <Card key={props.scheduling.id}>
            <$Content>
                <Thumbnail src={props.scheduling.product.cover} size={"med"} />
                <div>
                    <$CardTitle>
                        <h2>{props.scheduling.product.name}</h2>
                    </$CardTitle>
                    <p>{nameToValue(paymentTypes, props.scheduling.payment)}</p>
                    <$Time>
                        <h1>{getHoursString(props.scheduling.startDate)}</h1>
                        <p>Até</p>
                        <h1>{getHoursString(props.scheduling.endDate)}</h1>
                        <p>{formatStringDate(props.scheduling.startDate)}</p>
                    </$Time>
                    {!props?.isProvider &&
                        <div>
                            <p className="provider">{provider?.fullname}</p>
                        </div>
                    }

                    <$SelectButton onClick={deleteScheduling}>
                        Cancelar
                    </$SelectButton>
                </div>
            </$Content>
        </Card >
    )
}