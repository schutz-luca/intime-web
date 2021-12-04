/**
 * IMPORTS
 */
import { useDispatch } from "react-redux";
import { Thumbnail } from "components/thumbnail";
import { Card } from "components/card";
import { notify } from "infra/notify";
import http from "infra/http";
import { $ButtonsContainer, $CardTitle, $DeleteButton, $SelectButton } from "./styles"
import { IServiceCardProps } from "./index.d"
import { MdCheck, MdDelete, MdEdit } from "react-icons/md";
import { Avatar } from "components/avatar";
import { useEffect, useState } from "react";
import { IProvider } from "constants/types";

/**
 * I am the service card, reactive according to provider view or client view
 */
export const ServiceCard = (props: IServiceCardProps) => {

    // get dispatch
    const dispatch = useDispatch();

    // const [provider, setProvider] = useState<IProvider | null>(null)
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response: IProvider = await http.get(`provider/${props.service.provider}`, { dispatch });

    //             if (!response)
    //                 throw Error;

    //             setProvider(response)
    //         }
    //         catch (ex) {
    //             notify({
    //                 title: 'Não foi possível resgatar o prestador',
    //                 message: 'Tente novamente mais tarde',
    //                 type: 'danger'
    //             })
    //         }
    //     })()
    // }, [])

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
        <Card key={props.service.id}>
            <Thumbnail src={props.service.image} />

            <$CardTitle>
                <h2>{props.service.name}</h2>
                <h3>R$ {props.service.price}</h3>
                <p>{props.service.description}</p>
                {/* {(!props.isProvider && provider) &&
                    <$ButtonsContainer >
                        <Avatar src={provider?.avatar} size="30px" />
                        <small>{provider?.fullname}</small>
                    </$ButtonsContainer>
                } */}
            </$CardTitle>
            <$ButtonsContainer>
                <$SelectButton onClick={() => props.selectCard({ ...props.service })}>
                    {props.isProvider ?
                        <>
                            <MdEdit />
                            Editar
                        </>
                        :
                        <>
                            <MdCheck />
                            Selecionar
                        </>
                    }
                </$SelectButton>
                {props.isProvider &&
                    <$DeleteButton onClick={deleteService}>
                        <MdDelete />
                        Excluir
                    </$DeleteButton>
                }
            </$ButtonsContainer>
        </Card >
    )
}