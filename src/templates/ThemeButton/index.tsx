/**
 * IMPORTS
 */
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { $ThemeButton } from "./styles";
import { selectIsDarkTheme } from "features/interfaceState/selectors";
import interfaceState from "features/interfaceState";
import { useDispatch, useSelector } from "react-redux";
import { IThemeButtonProps } from "./index.d";

const defaultProps: IThemeButtonProps = {
    absolute: true
}

/**
 * I am the switch theme mode button
 */
export const ThemeButton = (props: IThemeButtonProps) => {

    const dispatch = useDispatch();

    const isDarkTheme = useSelector(selectIsDarkTheme);

    const changeTheme = () => {
        dispatch(interfaceState.actions.switchTheme({}));
    }

    return (
        <$ThemeButton onClick={changeTheme} style={{ position: props.absolute ? 'absolute' : 'unset' }}>
            {isDarkTheme ?
                <MdLightMode />
                :
                <MdDarkMode />
            }
        </$ThemeButton>
    )
}

ThemeButton.defaultProps = defaultProps;
