/**
 * IMPORTS
 */
import { useDispatch } from "react-redux";
import interfaceState from 'features/interfaceState';
import { Content } from "layouts/MainLayout/content";
import { Title } from "components/title";

/**
 * I am the Home Page
 */
export const Home = () => {

    return (
        <Content fixed={
            <Title
                title="Escolha um serviço"
                subtitle="Você também pode filtrar por categorias"
            />
        }>

        </Content>
    )
}