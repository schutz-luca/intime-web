/**
 * IMPORTS
 */
import { ICardProps } from "./index.d";
import { $Card } from "./styles";

/**
 * I am a styled card
 */
export const Card = (props: ICardProps) => (
    <$Card onClick={props?.onClick} className={props?.onClick ? "clickable" : ""}>
        {props.children}
    </$Card>
)