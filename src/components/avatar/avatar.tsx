import { MdPerson } from "react-icons/md";
import { IAvatarProps } from "./index.d";
import { $AvatarContainer } from "./styles"

export const defaultProps = {
    size: '60px'
}

export const Avatar = (props: IAvatarProps) => {
    return (
        <$AvatarContainer style={{ height: props.size, width: props.size }}>
            {props.src ?
                <img src={props.src} alt='' />
                :
                <MdPerson />
            }
        </$AvatarContainer>
    )
}

Avatar.defaultProps = defaultProps;