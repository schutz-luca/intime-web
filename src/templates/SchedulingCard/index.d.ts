/**
 * IMPORTS
 */
import { IScheduling } from "../../constants/types";

export interface ISchedulingCardProps {
    updateList?: () => void
    scheduling: IScheduling
}