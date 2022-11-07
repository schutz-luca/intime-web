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
import { IScheduling, IService } from "constants/types";
import { ServiceCard } from "templates/ServiceCard";
import { $CardContainer } from "components/card/styles";
import { variants } from "styles/theme";
import { EmptyState } from "components/emptystate";
import { FaRobot } from "react-icons/fa";
import { SchedulingModal } from "templates/SchedulingModal";

/**
 * I am the Home Page
 */
export const ClientHome = () => {

    // get dispatch
    const dispatch = useDispatch();

    const [services, setServices] = useState<IService[]>([]);
    const [selectedService, setSelectedService] = useState<IService | null>(null);

    // modal states
    const [isOpen, setIsOpen] = useState(false);
    const handleModal = (isOpen: boolean) => { setIsOpen(isOpen); }

    const openCreateModal = (service: IService) => {
        setIsOpen(true);
        setSelectedService(service);
    }

    useEffect(() => {
        (async () => {
            try {
                const response: IService[] = await http.get('product', { dispatch });

                if (!response)
                    throw Error;

                setServices(response)
            }
            catch (ex) {
                notify({
                    title: 'Não foi possível listar os serviços disponíveis',
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
            <SchedulingModal
                isOpen={isOpen}
                setIsOpen={handleModal}
                service={selectedService}
            />
            {services.length > 0 ?
                <$CardContainer variants={variants}>
                    {services.map(service => <ServiceCard selectCard={openCreateModal} service={service} key={service.id} />)}
                </$CardContainer>
                :
                <EmptyState
                    description="Não há nenhum serviço disponível"
                    icon={FaRobot}
                />
            }
        </Content>
    )
}