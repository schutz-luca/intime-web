/**
 * IMPORTS
 */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LoginImage from "assets/login-background.svg";
import { Button } from "components/button";
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { selectIsLoading } from "features/notify/selectors";
import user from "features/user";
import { LoginLayout } from "layouts/LoginLayout"
import { $Form, $Link } from "pages/LoginPage/styles";
import { schema } from "./schema";
import http from 'infra/http';
import { notify } from 'infra/notify';
import { useHistory } from 'react-router';

/**
 * I am the login page
 */
export const ProviderJoin = () => {

    // get dispatch
    const dispatch = useDispatch();

    const history = useHistory();

    // use form
    const { control, errors, handleSubmit, register } = useForm({
        resolver: yupResolver(schema)

    });

    const isLoading = useSelector(selectIsLoading);

    // handle form submit
    const onSubmit = (data: any): void => {
        try {
            const body = { ...data, confirmPassword: undefined };
            http.post('providers/', { body, dispatch });
            notify({
                title: 'Cadastro feito com sucesso!',
                message: 'Faça login para continuar',
                type: 'success'
            });
            history.push("/");
        }
        catch (ex) {
            notify({
                title: 'Não foi possível realizar o cadastro',
                message: 'Tente novamente mais tarde',
                type: 'danger'
            })
        }

    };

    return (
        <LoginLayout leftImage={LoginImage}>
            <h1>Seja um prestador!</h1>
            <p>Preencha com as suas informações </p>
            <p>e comece a usar a plataforma!</p>
            <$Form onSubmit={handleSubmit(onSubmit)}>
                <Field error={errors.fullname?.message} label="Nome Completo">
                    <Input name="fullname" innerRef={register} />
                </Field>
                <Field error={errors.cpf?.message} label="CPF">
                    <Input
                        name="cpf"
                        innerRef={register}
                        control={control}
                        mask="999.999.999-99"
                        formatChars={{ 9: '[0-9]' }}
                        maskChar={null}
                    />
                </Field>
                <Field error={errors.birth_date?.message} label="Data de Nascimento">
                    <Input name="birth_date" innerRef={register} type="date" />
                </Field>
                <Field error={errors.email?.message} label="Email">
                    <Input name="email" innerRef={register} />
                </Field>

                <Field error={errors.phone?.message} label="Celular">
                    <Input
                        name="phone"
                        innerRef={register}
                        control={control}
                        mask="(99) 99999-9999"
                        formatChars={{ 9: '[0-9]' }}
                        maskChar={null}
                    />
                </Field>

                <Field error={errors.password?.message} label="Senha">
                    <Input name="password" innerRef={register} type="password" />
                </Field>

                <Field error={errors.confirmPassword?.message} label="Confirmar Senha">
                    <Input name="confirmPassword" innerRef={register} type="password" />
                </Field>

                <Button disabled={isLoading}>
                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </Button>
            </$Form>
        </LoginLayout>
    )
}