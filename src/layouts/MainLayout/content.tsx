/**
 * IMPORTS
 */
import { $Content, $ContentContent, $ContentFixed, variants } from "./styles"
import { IContentProps } from "./index.d"

export const Content = (props: IContentProps) => {
    return (
        <$Content variants={variants}>
            {props.fixed &&
                <$ContentFixed>
                    {props.fixed}
                </$ContentFixed>
            }
            <$ContentContent>
                {props.children}
            </$ContentContent>
        </$Content>
    )
}