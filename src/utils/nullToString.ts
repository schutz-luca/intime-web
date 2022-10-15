/**
 * I am a function to form view, transforming null fields in a "-"
 * @param string 
 * @returns "-" if it is null
 */
export const nullToString = (string: string | number) => {
    if (string)
        return string
    else
        return '-'
}