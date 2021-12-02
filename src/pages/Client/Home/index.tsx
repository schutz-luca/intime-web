/**
 * IMPORTS
 */
import { useDispatch } from "react-redux";
import interfaceState from 'features/interfaceState';
import { Content } from "layouts/MainLayout/content";
import { Title } from "components/title";
import { useEffect, useState } from "react";
import http from "infra/http";
import { notify } from "infra/notify";
import { IService } from "constants/types";
import { ServiceCard } from "templates/ServiceCard";
import { $CardContainer } from "components/card/styles";
import { variants } from "styles/theme";

/**
 * I am the Home Page
 */
export const ClientHome = () => {

    // get dispatch
    const dispatch = useDispatch();

    const [services, setServices] = useState<IService[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response: IService[] = await http.get('services/', { dispatch });

                if (!response)
                    throw Error;

                setServices(response)
            }
            catch (ex) {
                notify({
                    title: 'Não foi possível realizar o cadastro',
                    message: 'Tente novamente mais tarde',
                    type: 'danger'
                })
            }
        })()
    }, [])

    return (
        <Content fixed={
            <Title
                title="Escolha um serviço"
                subtitle="Você também pode filtrar por categorias"
            />
        }>
            <$CardContainer variants={variants}>
                {services.map(service => ServiceCard({ service }))}
            </$CardContainer>
        </Content>
    )
}