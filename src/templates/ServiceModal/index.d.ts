/**
 * IMPORTS
 */
import { IService } from "constants/types";

export interface IServiceModalProps {
    isOpen: boolean
    setIsOpen: (boolean) => void
    updateList: () => void
    isNew?: boolean
    service?: IService
}