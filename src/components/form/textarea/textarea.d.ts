/**
 * Textarea properties type.
 */
export interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoExpand?: boolean
  innerRef: LegacyRef<HTMLInputElement>
  maxHeight?: number
  onChange?: (value: unknown) => unknown
}
