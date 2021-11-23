/**
 * Input properties type.
 */
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control?: any
  formatChars?: any
  innerRef?: LegacyRef<HTMLInputElement>
  mask?: string | Array<(string | RegExp)>
  maskChar?: any
}
