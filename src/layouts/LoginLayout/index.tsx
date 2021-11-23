import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import Logo from "assets/logo.svg";
import Element from "assets/element1.svg";
import { ILoginLayoutProps } from "./index.d"
import { $Element, $LeftContainer, $LoginLayout, $Logo, $RightContainer, $RightContent, $ThemeButton, variants } from "./styles";
import { selectIsDarkTheme } from "features/interfaceState/selectors";
import interfaceState from "features/interfaceState";
import { useDispatch, useSelector } from "react-redux";

export const LoginLayout = (props: ILoginLayoutProps) => {

    const dispatch = useDispatch();

    const isDarkTheme = useSelector(selectIsDarkTheme);

    const changeTheme = () => {
        dispatch(interfaceState.actions.switchTheme({}));
    }

    return (
        <$LoginLayout>
            <$Logo src={Logo} />
            <$ThemeButton onClick={changeTheme}>
                {isDarkTheme ?
                    <MdOutlineLightMode />
                    :
                    <MdOutlineDarkMode />
                }
            </$ThemeButton>
            <$LeftContainer>
                <img src={props.leftImage} alt="login banner" />
            </$LeftContainer>
            <$RightContainer>
                <$RightContent variants={variants}>
                    {props.children}
                </$RightContent>
                <$Element src={Element} alt="" />
            </$RightContainer>
        </$LoginLayout>
    )
}