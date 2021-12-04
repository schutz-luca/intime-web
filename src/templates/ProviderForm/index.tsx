/**
 * IMPORTS
 */
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { Row } from "components/form/row";
import { removeMask } from "utils/removeMask";
import { IProviderFormProps } from "./index.d";

/**
 * I am the provider form
 */
export const ProviderForm = (props: IProviderFormProps) => {

    return (
        <>
            <Field error={props.errors.fullname?.message} label="Nome Completo">
                <Input name="fullname" innerRef={props.register} defaultValue={props.provider?.fullname} />
            </Field>

            <Field error={props.errors.cpf?.message} label="CPF">
                <Input
                    name="cpf"
                    control={props.control}
                    mask="999.999.999-99"
                    formatChars={{ 9: '[0-9]' }}
                    maskChar={null}
                    defaultValue={props.provider?.cpf}
                />
            </Field>
            <Field error={props.errors.birthDate?.message} label="Data de Nascimento">
                <Input name="birthDate" innerRef={props.register} type="date" defaultValue={props.provider?.birthDate} />
            </Field>

            <Field error={props.errors.email?.message} label="Email">
                <Input name="email" innerRef={props.register} defaultValue={props.provider?.email} />
            </Field>

            <Field error={props.errors.phone?.message} label="Celular">
                <Input
                    control={props.control}
                    defaultValue={!!props.provider?.phone && props.provider?.phone}
                    mask="(99) 99999-9999"
                    formatChars={{ 9: '[0-9]' }}
                    maskChar={null}
                    name="phone"
                />
            </Field>

            {!props.isEditing &&
                <>
                    <Field error={props.errors.password?.message} label="Senha">
                        <Input name="password" innerRef={props.register} type="password" />
                    </Field>

                    <Field error={props.errors.confirmPassword?.message} label="Confirmar Senha">
                        <Input name="confirmPassword" innerRef={props.register} type="password" />
                    </Field>
                </>
            }
        </>
    )
}