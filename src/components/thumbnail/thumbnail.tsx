/**
 * IMPORTS
 */
import { MdImage } from "react-icons/md";
import { IThumbailProps } from "./index.d";
import { $ServiceImage } from "./styles";

/**
 * I am a thumnail component
 */
export const Thumbnail = (props: IThumbailProps) => (
    <$ServiceImage>
        {props.src ?
            <img src={props.src} alt="service image" />
            :
            <MdImage />
        }
    </$ServiceImage>
)