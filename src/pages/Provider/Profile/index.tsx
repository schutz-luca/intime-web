import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "components/title"
import { IProvider } from "constants/types";
import { selectUser } from "features/user/selectors";
import http from "infra/http";
import { notify } from "infra/notify";
import { Content } from "layouts/MainLayout/content"
import { editSchema } from "templates/ProviderForm/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProviderForm } from "templates/ProviderForm";
import { $AvatarContainer, $ProfileContainer, $Form, $Divisor } from "./styles";
import { Button } from "components/button";
import { MdCameraAlt, MdCheck } from "react-icons/md";
import { Avatar } from "components/avatar";
import { FilePicker } from "components/form/filepicker";
import { toBase64 } from "utils/toBase64";
import { AddressForm } from "templates/AddressForm";

export const ProviderProfile = () => {

    // get dispatch
    const dispatch = useDispatch();

    const { id } = useSelector(selectUser);

    const [provider, setProvider] = useState<IProvider>(null);

    const [photo, setPhoto] = useState(null);

    // use form
    const { control, errors, handleSubmit, register } = useForm({
        resolver: yupResolver(editSchema)

    });

    useEffect(() => {
        (async () => {
            try {
                const response: IProvider = await http.get(`provider/${id}/`, { dispatch });

                if (!response)
                    throw Error;

                setProvider(response)
            }
            catch (ex) {
                notify({
                    title: 'Não foi possível resgatar os dados do perfil',
                    message: 'Tente novamente mais tarde',
                    type: 'danger'
                })
            }
        })()
    }, [])

    const onPick = async (file) => {
        const base64 = await toBase64(file);
        setPhoto(base64);
    }

    const onSubmit = async (data: any): Promise<void> => {
        try {
            let response = null;

            const body = {
                ...data,
                avatar: photo,
                address: null
            }

            response = await http.put(`provider/${id}/`, { body, dispatch });

            if (!response)
                throw Error;

            notify({
                title: `Sucesso!`,
                message: 'Perfil atualizado com sucesso',
                type: 'success'
            });
        }
        catch (ex) {
            notify({
                title: 'Não foi possível salvar o perfil',
                message: 'Tente novamente mais tarde',
                type: 'danger'
            })
        }
    }

    return (
        <Content fixed={
            <Title
                title="Seu Perfil"
                subtitle="Aqui você poderá checar seus dados pessoais"
            />
        }>
            <$ProfileContainer>

                <$Form onSubmit={handleSubmit(onSubmit)}>
                    <$AvatarContainer>
                        <Avatar src={photo || provider?.photo} size="200px" />
                        <FilePicker
                            name="avatar"
                            innerRef={register}
                            onPick={onPick}
                            icon={<MdCameraAlt />}
                        >
                            Selecionar avatar
                        </FilePicker>
                    </$AvatarContainer>
                    {provider &&
                        <ProviderForm
                            control={control}
                            errors={errors}
                            register={register}
                            provider={provider}
                            isEditing={true}
                        />
                    }
                    <$Divisor>
                        Endereço
                    </$Divisor>
                    <AddressForm
                        control={control}
                        errors={errors}
                        register={register}
                    />
                    <Button>
                        Salvar
                    </Button>
                </$Form>
            </$ProfileContainer>
        </Content>
    )
}