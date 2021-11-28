/**
 * IMPORTS
 */
import { ITitle } from "./index.d";
import { $Subtitle, $Title } from "./styles";

/**
 * I am a Title component
 */
export const Title = ({ title, subtitle }: ITitle) => (
    <$Title>
        {title}
        <$Subtitle>
            {subtitle}
        </$Subtitle>
    </$Title>
);