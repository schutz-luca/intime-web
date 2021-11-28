/**
 * IMPORTS
 */
import { TopMenu } from "components/topmenu"
import { $MainLayout } from "./styles"
import { IMainLayoutProps } from "./index.d"

/**
 * I am the main layout
 */
export const MainLayout = (props: IMainLayoutProps) => {
    return (
        <$MainLayout>
            <TopMenu />
            {props.children}
        </$MainLayout>
    )
}