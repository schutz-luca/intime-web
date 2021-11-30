import { MdOutlineReceipt, MdSchedule } from "react-icons/md"
import { IMenuOption } from "components/topmenu/index.d";

export const clientOptions: IMenuOption[] = [
    {
        icon: <MdOutlineReceipt />,
        label: 'Meus pedidos',
        link: 'pedidos'
    },
]

export const providerOptions: IMenuOption[] = [
    {
        icon: <MdSchedule />,
        label: 'Meus agendamentos',
        link: 'agendamentos'
    }
]