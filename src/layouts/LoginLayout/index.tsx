/**
 * IMPORTS
 */
import Element from "assets/element1.svg";
import Logo from "assets/logo.svg";
import { ThemeButton } from "templates/ThemeButton";
import { ILoginLayoutProps } from "./index.d"
import { $Element, $LeftContainer, $LoginLayout, $Logo, $RightContainer, $RightContent, variants } from "./styles";

/**
 * I am the login layout
 */
export const LoginLayout = (props: ILoginLayoutProps) => {
    return (
        <$LoginLayout>
            <$Logo src={Logo} className={props.isJoin ? "isJoin" : ''}/>
            <ThemeButton />
            <$LeftContainer>
                <img src={props.leftImage} alt="login banner" />
            </$LeftContainer>
            <$RightContainer>
                <$RightContent variants={variants} className={props.isJoin ? "isJoin" : ''}>
                    {props.children}
                </$RightContent>
                <$Element src={Element} alt="" />
            </$RightContainer>
        </$LoginLayout>
    )
}