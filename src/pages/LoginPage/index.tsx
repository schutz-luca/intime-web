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
import { schema } from "./schema";
import { $CheckContainer, $Form, $Link } from "./styles";
import http from 'infra/http';
import { useHistory } from 'react-router';
import { notify } from 'infra/notify';
import { Checkbox } from 'components/form/checkbox';
import { useState } from 'react';

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
            const entity = data.isProvider ? 'provider' : 'client'
            const response = await http.get(`${entity}`, { dispatch });

            if (!response)
                throw Error;

            

            const currentUser = response[0];

            dispatch(user.actions.update({
                id: currentUser.id,
                email: currentUser.email,
                name: currentUser.fullname,
                role: entity,
                signed: true,
            }));
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
            <h1>inTime</h1>
            <p>O lugar perfeito para você ganhar tempo</p>
            <$Form onSubmit={handleSubmit(onSubmit)}>
                <Field error={errors.email?.message} label="Email">
                    <Input name="email" innerRef={register} />
                </Field>

                <Field error={errors.password?.message} label="Senha">
                    <Input name="password" innerRef={register} type="password" />
                </Field>

                <$CheckContainer >
                    <p>Deseja entrar como prestador?</p>
                    <Checkbox name="isProvider" innerRef={register} />
                </$CheckContainer>

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