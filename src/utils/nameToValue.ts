/**
 * IMPORTS
 */
import { IOption } from "components/form/select/select.d";

/**
 * 
 * @param options 
 * @param value 
 * @returns the current name of the value
 */
export const nameToValue = (options: IOption[], value: string) => {
    let name = '';

    options.forEach(option => {
        if (option.value === value)
            name = option.name
    })

    return name
}