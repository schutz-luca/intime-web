/**
 * IMPORTS
 */
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Card } from "components/card";
import { $CardContent } from "components/card/styles";
import { Thumbnail } from "components/thumbnail";
import { IProvider } from "constants/types";
import { notify } from "infra/notify";
import http from "infra/http";
import { IServiceCardProps } from "./index.d"
import { $ButtonsContainer, $CardTitle, $DeleteButton, $SelectButton } from "./styles"

/**
 * I am the service card, reactive according to provider view or client view
 */
export const ServiceCard = (props: IServiceCardProps) => {

    // get dispatch
    const dispatch = useDispatch();

    const provider = props?.service?.provider;

    const deleteService = async () => {
        try {
            if (!confirm('Você deseja mesmo excluir esse serviço?'))
                return

            await http.delete(`product/${props?.service?.id}`, { dispatch });

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

    const selectCard = () => props.selectCard({ ...props.service })

    return (
        <Card key={props.service.id} onClick={!props.isProvider && selectCard}>
            <$CardContent>
                <Thumbnail src={props.service.cover} />
                <div className="info">
                    <$CardTitle>
                        <h2>{props.service.name}</h2>
                        <h3>R$ {props.service.price}</h3>
                        {!props.isProvider &&
                            <>
                                <p>{provider?.fullname}</p>
                                <small>{provider?.category?.name}</small>
                            </>
                        }
                        {/* <p>{props.service.description}</p> */}
                    </$CardTitle>
                    <$ButtonsContainer>
                        {props.isProvider &&
                            <>
                                <$SelectButton onClick={() => props.selectCard({ ...props.service })}>
                                    <MdEdit />
                                </$SelectButton>
                                <$DeleteButton onClick={deleteService}>
                                    <MdDelete />
                                </$DeleteButton>
                            </>
                        }
                    </$ButtonsContainer>
                </div>
            </$CardContent>
        </Card >
    )
}