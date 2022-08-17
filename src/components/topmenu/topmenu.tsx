/**
 * IMPORTS
 */
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "assets/logo.svg";
import { MobileMenu } from "components/mobilemenu";
import useLogout from "hooks/useLogout";
import { ThemeButton } from "templates/ThemeButton";
import { ITopMenuProps } from "./index.d";
import { Option } from "./option";
import { $Logo, $MenuOption, $TopMenuContainer, $TopMenuContent, $TopMenuOptions } from "./styles";

/**
 * I am the top menu
 */
export const TopMenu = (props: ITopMenuProps) => {

    const [openMenu, setOpenMenu] = useState(false);
    const handleMobileMenu = () => setOpenMenu(!openMenu);

    const logout = useLogout();

    return (
        <>
            <MobileMenu open={openMenu} setOpen={setOpenMenu} options={props.options}/>
            <$TopMenuContainer>
                <$TopMenuContent>

                    <NavLink className="logoLink" to="/"><$Logo src={Logo} alt="logo" /></NavLink>

                    <$TopMenuOptions >
                        {props.options.map(Option)}
                        <$MenuOption onClick={logout}>
                            <MdLogout />
                            <p>Sair</p>
                        </$MenuOption>
                    </$TopMenuOptions>

                    <$MenuOption onClick={handleMobileMenu} className="mobileOption">
                        <FiMenu />
                        <p>Menu</p>
                    </$MenuOption>

                    <ThemeButton absolute={false} />

                </$TopMenuContent>
            </$TopMenuContainer>
        </>
    )
}