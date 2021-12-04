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
import { $SelectButton, $Time } from "./styles"
import { Thumbnail } from "components/thumbnail";
import { $CardTitle } from "templates/ServiceCard/styles";

/**
 * I am the scheduling card, reactive according to provider view or client view
 */
export const SchedulingCard = (props: ISchedulingCardProps) => {

    // get dispatch
    const dispatch = useDispatch();

    const deleteScheduling = async () => {
        try {
            if (!confirm('Você deseja mesmo cancelar esse agendamento?'))
                return

            await http.delete(`schedulings/${props?.scheduling?.id}`, { dispatch });

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
            <Thumbnail src={props.scheduling.service.image} />
            <$CardTitle>
                <h2>{props.scheduling.service.name}</h2>
                <p>{props.scheduling.service.description}</p>
            </$CardTitle>
            <p>{nameToValue(paymentTypes, props.scheduling.payment)}</p>
            <$Time>
                <div>
                    <h1>{getHoursString(props.scheduling.start)}</h1>
                    <p>Até</p>
                    <h1>{getHoursString(props.scheduling.end)}</h1>
                </div>
                <p>{formatStringDate(props.scheduling.start)}</p>
            </$Time>


            <$SelectButton onClick={deleteScheduling}>
                Cancelar
            </$SelectButton>
        </Card >
    )
}