import { MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IMenuOption } from "./index.d";
import { $MenuOption } from "./styles";

export const Option = (props: IMenuOption) => {

    return (
        <NavLink to={props.link} key={props.link}>
            <$MenuOption >
                {props.icon}
                <p>{props.label}</p>
            </$MenuOption>
        </NavLink>
    )
}