/**
 * IMPORTS
 */
import { IClient } from "../../constants/types";

export interface IClientFormProps {
    isEditing?: boolean
    errors: any
    control: any
    register: any
    client?: IClient
}