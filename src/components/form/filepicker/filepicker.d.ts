/**
 * File picker properties interface.
 */
export interface IProps {
  children?: ReactNode
  icon?: JSX.Element;
  innerRef?: any
  multiple?: boolean
  name: string
  onPick: (info, file?) => unknown
}
