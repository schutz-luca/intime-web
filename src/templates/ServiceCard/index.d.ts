/**
 * IMPORTS
 */
import { IService } from "../../constants/types";

export interface IServiceCardProps {
    isProvider?: boolean
    selectCard: (service: IService) => void
    updateList: () => void
    service: IService
}