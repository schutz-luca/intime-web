/**
 * IMPORTS
 */
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { Row } from "components/form/row";
import { IClientFormProps } from "./index.d";

/**
 * I am the client form
 */
export const ClientForm = (props: IClientFormProps) => (
    <>
        <Field error={props.errors.fullname?.message} label="Nome Completo">
            <Input name="fullname" innerRef={props.register} defaultValue={props.client?.fullname} />
        </Field>
        <Row>
            <Field error={props.errors.email?.message} label="Email">
                <Input name="email" innerRef={props.register} defaultValue={props.client?.email} />
            </Field>

            <Field error={props.errors.phone?.message} label="Celular">
                <Input
                    control={props.control}
                    defaultValue={!!props.client?.phone && props.client?.phone}
                    mask="(99) 99999-9999"
                    formatChars={{ 9: '[0-9]' }}
                    maskChar={null}
                    name="phone"
                />
            </Field>
        </Row>

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