import Logo from "assets/logo.svg";
import Element from "assets/element1.svg";
import { ILoginLayoutProps } from "./index.d"
import { $Element, $LeftContainer, $LoginLayout, $Logo, $RightContainer, $RightContent, variants } from "./styles"

export const LoginLayout = (props: ILoginLayoutProps) => {
    return (
        <$LoginLayout>
            <$Logo src={Logo} />
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