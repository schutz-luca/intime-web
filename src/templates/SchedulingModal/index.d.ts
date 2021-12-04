/**
 * IMPORTS
 */
import { IService } from "constants/types";

export interface ISchedulingModalProps {
    isOpen: boolean
    setIsOpen: (boolean) => void
    service?: IService
}