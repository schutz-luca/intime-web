/**
 * IMPORTS
 */
import { IProvider } from "../../constants/types";

export interface IProviderFormProps {
    isEditing?: boolean
    errors: any
    control: any
    register: any
    provider?: IProvider
}