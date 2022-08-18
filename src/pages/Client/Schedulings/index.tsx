/**
 * IMPORTS
 */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaRobot } from "react-icons/fa";
import { $CardContainer } from "components/card/styles";
import { EmptyState } from "components/emptystate";
import { Title } from "components/title";
import { IScheduling } from "constants/types";
import http from "infra/http";
import { notify } from "infra/notify";
import { Content } from "layouts/MainLayout/content";
import { SchedulingCard } from "templates/SchedulingCard";
import { variants } from "styles/theme";

/**
 * I am the Home Page
 */
export const ClientSchedulings = () => {

    // get dispatch
    const dispatch = useDispatch();

    const [schedulings, setSchedulings] = useState<IScheduling[]>([]);

    const [updateListTrigger, setUpdateListTrigger] = useState(false);
    const updateList = () => { setUpdateListTrigger(!updateListTrigger) };

    useEffect(() => {
        (async () => {
            try {
                const response: IScheduling[] = await http.get('scheduling', { dispatch });

                if (!response)
                    throw Error;

                setSchedulings(response)
            }
            catch (ex) {
                notify({
                    title: 'Não foi possível listar os agendamentos',
                    message: 'Tente novamente mais tarde',
                    type: 'danger'
                })
            }
        })()
    }, [updateListTrigger])

    return (
        <Content fixed={
            <Title
                title="Seus Agendamentos"
                subtitle="Gerencia sua agenda"
            />
        }>
            <$CardContainer variants={variants}>
                {schedulings.length > 0 ?
                    schedulings.map(scheduling => SchedulingCard({ updateList: updateList, scheduling }))
                    :
                    <EmptyState
                        description="Não há nenhum agendamento disponível"
                        icon={FaRobot}
                    />
                }
            </$CardContainer>
        </Content>
    )
}