/**
 * IMPORTS
 */
import { TopMenu } from "components/topmenu"
import { $MainLayout } from "./styles"
import { IMainLayoutProps } from "./index.d"
import { selectUser } from "features/user/selectors";
import { useSelector } from "react-redux";
import { RoleEnum } from "features/user/index.d";
import { clientOptions, providerOptions } from "constants/menuOptions";

/**
 * I am the main layout
 */
export const MainLayout = (props: IMainLayoutProps) => {

    const { role } = useSelector(selectUser);

    return (
        <$MainLayout>
            <TopMenu options={role === RoleEnum.PROVIDER ? providerOptions : clientOptions} />
            {props.children}
        </$MainLayout>
    )
}