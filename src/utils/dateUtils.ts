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
    if (date)
        return format(new Date(date), 'HH\':\'mm', { locale: ptBR })
}

/**
 * I format a date to string in date type input format
 */
export const formatInputDate = (date): string => (
    date && format(new Date(date), 'yyyy-MM-dd')
);


/**
 * 
 * @param date string
 * @returns formatted date
 */
export const formatStringDate = (date: string) => {
    if (date)
        return format(new Date(date), 'dd\'/\'MM\'/\'yyyy', { locale: ptBR })
}

/**
 * 
 * @param date 
 * @returns formatted date string
 */
export const dateToString = (date: Date) => {
    if (date)
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
        if (date) {
            date = new Date(date)
            const newDate = new Date(date.getTime() + minutes * 60000);
            return dateToString(newDate)
        }
    }
    catch (err) {
        console.error(err);
        if (date)
            return date
        return null;
    }
}