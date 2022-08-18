/**
 * IMPORTS
 */
import { useDispatch } from "react-redux";
import interfaceState from 'features/interfaceState';
import { Content } from "layouts/MainLayout/content";
import { Title } from "components/title";
import { $CardContainer } from "components/card/styles";
import { IService } from "constants/types";
import { notify } from "infra/notify";
import http from "infra/http";
import { useState, useEffect } from "react";
import { ServiceCard } from "templates/ServiceCard";
import { $ButtonContainer, $CreateButton } from "./styles";
import { MdAdd, MdCreate } from "react-icons/md";
import { ServiceModal } from "templates/ServiceModal";
import { EmptyState } from "components/emptystate";
import {FaRobot} from "react-icons/fa";

/**
 * I am the Home Page
 */
export const ListServices = () => {

    // get dispatch
    const dispatch = useDispatch();

    const [services, setServices] = useState<IService[]>([]);
    const [selectedService, setSelectedService] = useState<IService | null>(null);

    // modal states
    const [isOpen, setIsOpen] = useState(false);
    const handleModal = (isOpen: boolean) => { setIsOpen(isOpen); }

    const [updateListTrigger, setUpdateListTrigger] = useState(false);
    const updateList = () => { setUpdateListTrigger(!updateListTrigger) };

    const openCreateModal = () => {
        setIsOpen(true);
        setSelectedService(null);
    }

    const openEditModal = (service: IService) => {
        setSelectedService(service)
        setIsOpen(true);
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
                    title: 'Não foi possível realizar o cadastro',
                    message: 'Tente novamente mais tarde',
                    type: 'danger'
                })
            }
        })()
    }, [updateListTrigger])

    return (
        <Content fixed={
            <Title
                title="Seus Serviços"
                subtitle="Aqui você pode ver seus serviços cadastrados"
            />
        }>
            <ServiceModal
                isOpen={isOpen}
                setIsOpen={handleModal}
                isNew={!selectedService}
                service={selectedService}
                updateList={updateList}
            />

            <$ButtonContainer>
                <$CreateButton onClick={openCreateModal}>
                    <MdAdd />
                </$CreateButton>
            </$ButtonContainer>

            <$CardContainer>
                {services.length > 0 ?
                     services.map(service => ServiceCard({ isProvider: true, selectCard: openEditModal, service, updateList })) 
                    :
                    <EmptyState
                        description="Não há nenhum registro para exibição"
                        icon={FaRobot}
                    />
                }
            </$CardContainer>
        </Content>
    )
}