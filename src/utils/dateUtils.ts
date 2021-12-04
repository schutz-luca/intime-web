/**
 * IMPORTS
 */
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

/**
 * 
 * @param date string
 * @returns formatted date
 */
export const getHoursString = (date: string) => {
    return format(new Date(date), 'HH\':\'MM', { locale: ptBR })
}


/**
 * 
 * @param date string
 * @returns formatted date
 */
export const formatStringDate = (date: string) => {
    return format(new Date(date), 'dd\'/\'MM\'/\'yyyy', { locale: ptBR })
}

/**
 * 
 * @param date 
 * @returns formatted date string
 */
export const dateToString = (date: Date) => {
    return format(date, 'yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm', { locale: ptBR })
}

/**
 * 
 * @param date 
 * @param minutes 
 * @returns new date
 */
export const addMinutes = (date, minutes) => {
    try {
        date = new Date(date)
        if (date) {
            const newDate = new Date(date.getTime() + minutes * 60000);
            return dateToString(newDate)
        }

        throw Error
    }
    catch (err) {
        console.error(err);
        if (date)
            return date
        return null;
    }
}