/**
 * IMPORTS
 */
import { $SelectButton } from "components/card/styles";
import { MdContentCopy } from "react-icons/md";
import { nullToString } from "utils/nullToString";
import { $TextContainer, $Label, $Text } from "./styles";
import { ITextViewerProps } from "./textviewer.d";

/**
 * I am a text viewer
 */
const TextViewer = (props: ITextViewerProps) => {
    const copy = () => navigator.clipboard.writeText(props.text as string);

    return (
        <$TextContainer>
            <$Label>{props.label}</$Label>
            {props.children ||
                <$Text>
                    {nullToString(props.text)}
                    {props?.copyButton &&
                        <$SelectButton onClick={copy}>
                            <MdContentCopy />
                        </$SelectButton>
                    }
                </$Text>
            }
        </$TextContainer>
    )

}
/**
 * EXPORTS
 */
export { TextViewer }