/**
 * IMPORTS
 */
import { MdLogout } from "react-icons/md";
import Logo from "assets/logo.svg";
import useLogout from "hooks/useLogout";
import { ThemeButton } from "templates/ThemeButton";
import { $Logo, $MenuButton, $SearchField, $TopMenuContainer, $TopMenuContent } from "./styles";
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { FiSearch } from "react-icons/fi";

/**
 * I am the top menu
 */
export const TopMenu = () => {

    const logout = useLogout();

    return (
        <$TopMenuContainer>
            <$TopMenuContent>

                <$Logo src={Logo} alt="logo" />

                <ThemeButton />

                <$SearchField>
                    <Input name="search" placeholder="Pesquisar" icon={<FiSearch />} />
                </$SearchField>

                <$MenuButton onClick={logout}>
                    <MdLogout />
                </$MenuButton>

            </$TopMenuContent>
        </$TopMenuContainer>
    )
}