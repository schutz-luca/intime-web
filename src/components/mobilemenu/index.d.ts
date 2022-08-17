import { IMenuOptions } from "../topmenu/index.d";

export interface IMobileMenuProps {
    options: IMenuOptions[]
    open?: boolean
    setOpen?: Dispatch<React.SetStateAction<boolean>>
}