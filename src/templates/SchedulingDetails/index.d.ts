/**
 * IMPORTS
 */
import { IScheduling } from "../../constants/types";

export interface ISchedulingDetailsProps {
    isOpen: boolean
    setIsOpen: (boolean) => void
    scheduling?: IScheduling
}