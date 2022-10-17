export interface ITopMenuProps {
    options: IMenuOptions[]
}

export interface IMenuOption {
    label: string
    link: string
    icon: JSX.Element
    action?: () => void
}