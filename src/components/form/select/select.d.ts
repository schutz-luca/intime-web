export interface IOption {
  name: string
  value: string | number
}

export interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  innerRef?: React.LegacyRef<HTMLSelectElement>
  onChange?: (value: string | number) => unknown
  options: IOption[]
}
