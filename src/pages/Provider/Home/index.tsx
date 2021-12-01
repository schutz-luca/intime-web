/**
 * IMPORTS
 */
import { Content } from "layouts/MainLayout/content";
import { Title } from "components/title";

/**
 * I am the Home Page
 */
export const ProviderHome = () => {

    return (
        <Content fixed={
            <Title
                title="Sua Agenda"
                subtitle="Aqui você poderá checar seus compromissos"
            />
        }>

        </Content>
    )
}