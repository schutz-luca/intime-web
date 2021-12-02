/**
 * IMPORTS
 */
import { MdHome, MdOutlineSelfImprovement, MdPerson, MdSchedule } from "react-icons/md"
import { IMenuOption } from "components/topmenu/index.d";

export const clientOptions: IMenuOption[] = [
    {
        icon: <MdHome />,
        label: 'Home',
        link: '/'
    },
    {
        icon: <MdSchedule />,
        label: 'Agenda',
        link: '/schedulings'
    },
    {
        icon: <MdPerson />,
        label: 'Perfil',
        link: '/profile'
    }
]

export const providerOptions: IMenuOption[] = [
    {
        icon: <MdOutlineSelfImprovement />,
        label: 'Serviços',
        link: 'services'
    },
    {
        icon: <MdSchedule />,
        label: 'Agenda',
        link: '/'
    },
    {
        icon: <MdPerson />,
        label: 'Perfil',
        link: '/profile'
    }
]