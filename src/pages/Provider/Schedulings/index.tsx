/**
 * IMPORTS
 */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaRobot } from "react-icons/fa";
import { Title } from "components/title";
import { $CardContainer } from "components/card/styles";
import { EmptyState } from "components/emptystate";
import { IScheduling } from "constants/types";
import { Content } from "layouts/MainLayout/content";
import http from "infra/http";
import { notify } from "infra/notify";
import { SchedulingCard } from "templates/SchedulingCard";
import { variants } from "styles/theme";

/**
 * I am the Home Page
 */
export const ProviderSchedulings = () => {

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
            {schedulings.length > 0 ?
                <$CardContainer variants={variants}>
                    {schedulings.map(scheduling => <SchedulingCard updateList={updateList} scheduling={scheduling} isProvider={true} />)}
                </$CardContainer>
                :
                <EmptyState
                    description="Não há nenhum agendamento disponível"
                    icon={FaRobot}
                />
            }
        </Content>
    )
}