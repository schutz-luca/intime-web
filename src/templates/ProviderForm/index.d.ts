/**
 * IMPORTS
 */
import { IOption } from "components/form/select/select";
import { ICategory, IProvider } from "../../constants/types";

export interface IProviderFormProps {
    isEditing?: boolean
    errors: any
    control: any
    register: any
    provider?: IProvider
    categories?: IOption[]
}