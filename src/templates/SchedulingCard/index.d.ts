/**
 * IMPORTS
 */
import { IScheduling } from "../../constants/types";

export interface ISchedulingCardProps {
    updateList?: () => void
    selectCard?: (service: IScheduling) => void
    scheduling: IScheduling
    isProvider?: boolean
}