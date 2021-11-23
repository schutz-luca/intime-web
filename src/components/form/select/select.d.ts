/**
 * Option properties type.
 */
export interface IOption {
  name: string
  value: string | number
}


/**
 * Select properties type.
 */
export interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  innerRef?: React.LegacyRef<HTMLSelectElement>
  onChange?: (value: string | number) => unknown
  options: IOption[]
}
