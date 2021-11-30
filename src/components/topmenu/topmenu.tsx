/**
 * IMPORTS
 */
import { MdLogout, MdOutlineMenu } from "react-icons/md";
import Logo from "assets/logo.svg";
import useLogout from "hooks/useLogout";
import { ThemeButton } from "templates/ThemeButton";
import { useState } from "react";
import { ITopMenuProps } from "./index.d";
import { $Logo, $MenuButton, $MenuOption, $SearchField, $TopMenuContainer, $TopMenuContent } from "./styles";
import { Option } from "./option";
import { NavLink } from "react-router-dom";

/**
 * I am the top menu
 */
export const TopMenu = (props: ITopMenuProps) => {

    const [isOptionsOpen, setIsOptionOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOptionOpen(!isOptionsOpen);
    }

    const logout = useLogout();

    return (
        <$TopMenuContainer>
            <$TopMenuContent>

                <NavLink to="/"><$Logo src={Logo} alt="logo" /></NavLink>

                {props.options.map(Option)}

                {/* <$SearchField>
                    <Input name="search" placeholder="Pesquisar" icon={<FiSearch />} />
                </$SearchField> */}

                <$MenuButton onClick={logout}>
                    <MdLogout />
                </$MenuButton>

                <ThemeButton absolute={false} />

            </$TopMenuContent>
        </$TopMenuContainer>
    )
}