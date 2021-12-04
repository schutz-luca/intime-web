/**
 * IMPORTS
 */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "components/button";
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { Select } from "components/form/select";
import { Modal } from "components/modal"
import { $ModalForm } from "components/modal/styles";
import { paymentTypes } from "constants/paymentTypes";
import { selectIsLoading } from "features/notify/selectors";
import { selectUser } from "features/user/selectors";
import http from "infra/http";
import { notify } from "infra/notify";
import { addMinutes } from "utils/dateUtils";
import { ISchedulingModalProps } from "./index.d";
import { schema } from "./schema"

/**
 * I am the scheduling modal from
 */
export const SchedulingModal = (props: ISchedulingModalProps) => {
    const { service } = props;

    // get dispatch
    const dispatch = useDispatch();

    // use form
    const { watch, errors, handleSubmit, register } = useForm({
        resolver: yupResolver(schema)
    });

    const watchStartDate = watch("start", null);
    const [endDate, setEndState] = useState(null);

    useEffect(() => {
        setEndState(addMinutes(watchStartDate,service?.duration));
    }, [watchStartDate])

    const { id } = useSelector(selectUser);

    const isLoading = useSelector(selectIsLoading);

    // handle form submit
    const onSubmit = async (data: any): Promise<void> => {
        try {
            let response = null;

            const body = {
                ...data,
                clientId: id,
                service: service.id,
                end: endDate
            }

            response = await http.post(`schedulings/`, { body, dispatch });

            if (!response)
                throw Error;

            notify({
                title: `Sucesso!`,
                message: 'Agendamento realizado, você pode visualiza-lo na opção "Agenda" do menu',
                type: 'success',
                duration: 10000
            });

            props.setIsOpen(false);
        }
        catch (ex) {
            notify({
                title: 'Não foi possível realizar o agendamento',
                message: 'Tente novamente mais tarde',
                type: 'danger'
            })
        }
    };

    return (
        <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
            <$ModalForm onSubmit={handleSubmit(onSubmit)}>
                <h1>Criar Agendamento</h1>
                <Field error={errors.payment?.message} label="Pagamento">
                    <Select
                        name="payment"
                        innerRef={register}
                        options={paymentTypes}
                    />
                </Field>

                <Field error={errors.start?.message} label="Horário">
                    <Input
                        name="start"
                        innerRef={register}
                        type="datetime-local"
                    />
                </Field>

                <Field error={errors.end?.price} label="Término">
                    <Input
                        name="end"
                        innerRef={register}
                        type="datetime-local"
                        value={endDate}
                        disabled
                    />
                </Field>

                <Button disabled={isLoading}>
                    {isLoading ? 'Criando...' : 'Criar'}
                </Button>
            </$ModalForm >
        </Modal>
    )
}