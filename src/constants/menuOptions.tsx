/**
 * IMPORTS
 */
import { MdOutlineSelfImprovement, MdSchedule } from "react-icons/md"
import { IMenuOption } from "components/topmenu/index.d";

export const clientOptions: IMenuOption[] = [
    {
        icon: <MdSchedule />,
        label: 'Minha Agenda',
        link: 'agenda'
    }
]

export const providerOptions: IMenuOption[] = [
    {
        icon: <MdOutlineSelfImprovement />,
        label: 'Meus Serviços',
        link: 'services'
    },
    {
        icon: <MdSchedule />,
        label: 'Minha Agenda',
        link: '/'
    }
]