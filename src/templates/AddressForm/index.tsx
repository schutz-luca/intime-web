/**
 * IMPORTS
 */
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { Row } from "components/form/row";
import { Select } from "components/form/select";
import { brazilStates } from "constants/brazilStates";
import { IAddressFormProps } from "./index.d";

/**
 * I am the address form
 */
export const AddressForm = (props: IAddressFormProps) => {
    return (
        <>
            <Row>
                <Field error={props.errors.zipCode?.message} label="CEP">
                    <Input
                        control={props.control}
                        defaultValue={!!props.address?.zipCode && props.address?.zipCode}
                        mask="99999-999"
                        formatChars={{ 9: '[0-9]' }}
                        maskChar={null}
                        name="zipCode"
                    />
                </Field>
                <Field error={props.errors.street?.message} label="Rua">
                    <Input
                        name="street"
                        innerRef={props.register}
                        defaultValue={props.address?.street}
                    />
                </Field>
            </Row>

            <Row>
                <Field error={props.errors.number?.message} label="Número">
                    <Input
                        name="number"
                        innerRef={props.register}
                        defaultValue={props.address?.number}
                        type="number"
                    />
                </Field>
                <Field error={props.errors.district?.message} label="Bairro">
                    <Input
                        name="district"
                        innerRef={props.register}
                        defaultValue={props.address?.district}
                    />
                </Field>
            </Row>
            <Row>
                <Field error={props.errors.city?.message} label="Cidade">
                    <Input
                        name="city"
                        innerRef={props.register}
                        defaultValue={props.address?.city}
                    />
                </Field>
                <Field error={props.errors.state?.message} label="Estado">
                    <Select
                        name="state"
                        innerRef={props.register}
                        defaultValue={props.address?.state}
                        options={brazilStates}
                    />
                </Field>
            </Row>
            <Field error={props.errors.complement?.message} label="Complemento">
                <Input
                    name="complement"
                    innerRef={props.register}
                    defaultValue={props.address?.complement}
                />
            </Field>
        </>
    )
}