/**
 * IMPORTS
 */
import { useState } from "react";
import { MdLogout, MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "assets/logo.svg";
import useLogout from "hooks/useLogout";
import { ThemeButton } from "templates/ThemeButton";
import { ITopMenuProps } from "./index.d";
import { Option } from "./option";
import { $Logo, $MenuButton, $MenuOption, $SearchField, $TopMenuContainer, $TopMenuContent, $TopMenuOptions } from "./styles";

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

                <$TopMenuOptions >
                    {props.options.map(Option)}
                    <$MenuOption onClick={logout}>
                        <MdLogout />
                        <p>Sair</p>
                    </$MenuOption>
                </$TopMenuOptions>

                {/* <$SearchField>
                    <Input name="search" placeholder="Pesquisar" icon={<FiSearch />} />
                </$SearchField> */}



                <ThemeButton absolute={false} />

            </$TopMenuContent>
        </$TopMenuContainer>
    )
}