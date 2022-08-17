import { AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode, MdLogout } from "react-icons/md";
import { IMenuOption } from "components/topmenu/index.d";
import interfaceState from "features/interfaceState";
import { selectIsDarkTheme } from "features/interfaceState/selectors";
import useLogout from "hooks/useLogout";
import { IMobileMenuProps } from "./index.d";
import { $MenuMobile, $Background, variants } from "./styles";

export const MobileMenu = ({ open, setOpen, options }: IMobileMenuProps) => {
    const logout = useLogout();
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(selectIsDarkTheme);

    const handleMenu = () => {
        setOpen(!open)
    }

    const changeTheme = () => {
        dispatch(interfaceState.actions.switchTheme({}));
    }

    const doAction = (option) => {
        if (option)
            option();

        handleMenu();
    }

    const menuOptions: IMenuOption[] = [
        ...options,
        { label: 'Mudar Tema', icon: isDarkTheme ? <MdLightMode /> : <MdDarkMode />, action: changeTheme },
        { label: 'Sair', icon: <MdLogout />, action: logout }
    ]

    return (
        <>
            <$MenuMobile className={open && "open"}>
                <ul>
                    {menuOptions.map(option => (
                        <Fragment key={option.label}>
                            {option.action &&
                                <li onClick={() => doAction(option.action)}>
                                    {option.icon}{option.label}
                                </li>
                            }
                            {option.link &&
                                <NavLink to={option.link} onClick={() => doAction(option.action)}>
                                    <li >
                                        {option.icon}{option.label}
                                    </li>
                                </NavLink>
                            }
                        </Fragment>
                    ))}
                </ul>
            </$MenuMobile>
            <AnimatePresence exitBeforeEnter>
                {open &&
                    <$Background
                        onClick={handleMenu}
                        variants={variants}
                        key={`backgroundIs${open}`}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />
                }
            </AnimatePresence>
        </>
    )
}