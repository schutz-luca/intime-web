import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { Modal } from "components/modal"
import { $ModalForm } from "components/modal/styles";
import { selectIsLoading } from "features/notify/selectors";
import user from "features/user";
import http from "infra/http";
import { notify } from "infra/notify";
import { $Form, $Link } from "pages/LoginPage/styles";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IServiceModalProps } from "./index.d";
import { schema } from "./schema"

export const ServiceModal = (props: IServiceModalProps) => {
    const { service } = props;

    // get dispatch
    const dispatch = useDispatch();

    const history = useHistory();

    // use form
    const { errors, handleSubmit, register } = useForm({
        resolver: yupResolver(schema)

    });

    const isLoading = useSelector(selectIsLoading);

    // handle form submit
    const onSubmit = async (data: any): Promise<void> => {
        try {
            let response = null;

            const body = {
                ...data,
                providerId: '66ee80e5-5119-4331-9949-0e244d49900c'
            }

            if (props.isNew)
                response = await http.post('services/', { body, dispatch });
            else
                response = await http.patch(`services/${props.service?.id}/`, { body, dispatch });

            if (!response)
                throw Error;

            notify({
                title: `Serviço ${props.isNew ? 'criado' : 'editado'} com sucesso:`,
                message: 'Lista atualizada!',
                type: 'success'
            });

            props.setIsOpen(false);
            props.updateList();
        }
        catch (ex) {
            notify({
                title: 'Não foi possível salvar o serviço',
                message: 'Tente novamente mais tarde',
                type: 'danger'
            })
        }
    };

    return (
        <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
            <$ModalForm onSubmit={handleSubmit(onSubmit)}>
                <h1>{props.isNew ? 'Cadastrar' : 'Editar'} Serviço</h1>
                <Field error={errors.name?.message} label="Nome">
                    <Input
                        name="name"
                        innerRef={register}
                        defaultValue={service?.name}
                    />
                </Field>

                <Field error={errors.description?.message} label="Descrição">
                    <Input
                        name="description"
                        innerRef={register}
                        defaultValue={service?.description}
                    />
                </Field>

                <Field error={errors.price?.price} label="Preço">
                    <Input
                        name="price"
                        innerRef={register}
                        defaultValue={service?.price}
                        type="number"
                    />
                </Field>

                <Field error={errors.duration?.duration} label="Duração (minutos)">
                    <Input
                        name="duration"
                        innerRef={register}
                        defaultValue={service?.duration}
                        type="number"
                    />
                </Field>



                <Button disabled={isLoading}>
                    {props.isNew ? 'Cadastr' : 'Edit'}
                    {isLoading ? 'ando...' : 'ar'}
                </Button>
            </$ModalForm >
        </Modal>
    )
}