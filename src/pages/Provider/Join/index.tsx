/**
 * IMPORTS
 */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import LoginImage from "assets/login-background.svg";
import { Button } from "components/button";
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { selectIsLoading } from "features/notify/selectors";
import http from 'infra/http';
import { notify } from 'infra/notify';
import { LoginLayout } from "layouts/LoginLayout"
import { $Form } from "pages/LoginPage/styles";
import { schema } from "../../../templates/ProviderForm/schema";
import { ProviderForm } from 'templates/ProviderForm';
import { useEffect, useState } from 'react';
import { ICategory } from 'constants/types';
import { IOption } from 'components/form/select/select.d';
import { AddressForm } from 'templates/AddressForm';

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

    const [categories, setCategories] = useState<IOption[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await http.get('category', { dispatch });

                if (!response)
                    throw Error

                let formattedCategories: IOption[] = response.map((category: ICategory) => { return { name: category.name, value: category.id } });
                formattedCategories.unshift({ name: "", value: null });

                setCategories(formattedCategories);
            }
            catch (ex) {
                notify({
                    title: 'Não foi possível resgatar as categorias de serviço',
                    message: 'Tente novamente mais tarde',
                    type: 'danger'
                })
            }
        })()
    }, []);

    // handle form submit
    const onSubmit = async (data: any): Promise<void> => {
        try {
            const body = {
                fullname: data.fullname,
                birthDate: data.birthDate,
                email: data.email,
                category: data.category,
                cpf: data.cpf,
                phone: data.phone,
                password: data.password,
                address: {
                    street: data.street,
                    number: data.number,
                    district: data.district,
                    complement: data.complement,
                    city: data.city,
                    state: data.state,
                    zipCode: data.zipCode
                }
            }
            const response = await http.post('provider/signup', { body, dispatch });

            if (!response)
                throw Error

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
        <LoginLayout leftImage={LoginImage} isJoin={true}>
            <h1>Seja um Prestador</h1>
            <p>Preencha com as suas informações </p>
            <p>e comece a usar a plataforma!</p>
            <$Form onSubmit={handleSubmit(onSubmit)}>
                <ProviderForm control={control} errors={errors} register={register} categories={categories} />
                <p className="addressObs">Preencha com o endereço de onde será prestado o serviço</p>
                <AddressForm control={control} errors={errors} register={register} />
                <Button disabled={isLoading}>
                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </Button>
            </$Form>
        </LoginLayout>
    )
}