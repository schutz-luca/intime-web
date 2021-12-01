import { NavLink } from "react-router-dom"
import { $Card, $SelectButton } from "./styles"
import { IServiceCardProps } from "./index.d"
import { notify } from "infra/notify";
import http from "infra/http";
import { useDispatch } from "react-redux";

/**
 * I am the service card, reactive according to provider view or client view
 */
export const ServiceCard = (props: IServiceCardProps) => {

    // get dispatch
    const dispatch = useDispatch();

    const deleteService = async () => {
        try {
            if (!confirm('Você deseja mesmo excluir esse serviço?'))
                return

            await http.delete(`services/${props?.service?.id}`, { dispatch });

            notify({
                title: 'Serviço excluído com sucesso:',
                message: 'Lista atualizada!',
                type: 'success'
            });
            props.updateList();
        }
        catch (ex) {
            notify({
                title: 'Não foi possível excluir o serviço',
                message: 'Tente novamente mais tarde',
                type: 'danger'
            })
        }
    }

    return (
        <$Card>
            <h1>{props.service.name}</h1>
            <p>{props.service.description}</p>
            <small>{props.service.provider}</small>
            <$SelectButton onClick={() => props.selectCard({ ...props.service })}>
                {props.isProvider ? 'Editar' : 'Selecionar'}
            </$SelectButton>
            {props.isProvider &&
                <$SelectButton onClick={deleteService}>
                    Excluir
                </$SelectButton>
            }
        </$Card >
    )
}