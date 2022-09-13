/**
 * IMPORTS
 */
import { yupResolver } from '@hookform/resolvers/yup';
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LoginImage from "assets/login-background.svg";
import { Button } from "components/button";
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { selectIsLoading } from "features/notify/selectors";
import user from "features/user";
import { LoginLayout } from "layouts/LoginLayout"
import { schema } from "./schema";
import { $CheckContainer, $Form, $Link } from "./styles";
import http from 'infra/http';
import { useHistory } from 'react-router';
import { notify } from 'infra/notify';

/**
 * I am the login page
 */
export const LoginPage = () => {

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
            const response = await http.post('login', { body: data, dispatch });

            if (!response)
                throw Error;

            const currentUser: any = jwt_decode(response.token);

            localStorage.setItem('token', response.token);
            dispatch(user.actions.update({
                id: currentUser.id,
                email: currentUser.email,
                name: currentUser.fullName,
                role: currentUser.role,
                signed: true,
            }));
            history.push("/");
        }
        catch (ex) {
            console.log(ex)
            notify({
                title: 'Não foi possível realizar o login',
                message: 'Verifique seu email e sua senha e tente novamente',
                type: 'danger'
            })
        }
    };

    return (
        <LoginLayout leftImage={LoginImage}>
            <h1>inTime</h1>
            <p>O lugar perfeito para você ganhar tempo</p>
            <$Form onSubmit={handleSubmit(onSubmit)}>
                <Field error={errors.email?.message} label="Email">
                    <Input name="email" innerRef={register} />
                </Field>

                <Field error={errors.password?.message} label="Senha">
                    <Input name="password" innerRef={register} type="password" />
                </Field>

                <Button disabled={isLoading}>
                    {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
                <p>Não tem conta?
                    <$Link to="join">
                        Cadastre-se
                    </$Link>
                </p>
                <small>Quer oferecer seu serviço na plataforma? <br />
                    <$Link to="join-provider">
                        Cadastre-se como prestador
                    </$Link>
                </small>

            </$Form>
        </LoginLayout>
    )
}