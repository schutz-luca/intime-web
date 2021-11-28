/**
 * IMPORTS
 */
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { $ThemeButton } from "./styles";
import { selectIsDarkTheme } from "features/interfaceState/selectors";
import interfaceState from "features/interfaceState";
import { useDispatch, useSelector } from "react-redux";

/**
 * I am the switch theme mode button
 */
export const ThemeButton = () => {

    const dispatch = useDispatch();

    const isDarkTheme = useSelector(selectIsDarkTheme);

    const changeTheme = () => {
        dispatch(interfaceState.actions.switchTheme({}));
    }

    return (
        <$ThemeButton onClick={changeTheme}>
            {isDarkTheme ?
                <MdLightMode />
                :
                <MdDarkMode />
            }
        </$ThemeButton>
    )
}
