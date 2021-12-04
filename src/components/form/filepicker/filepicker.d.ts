/**
 * File picker properties interface.
 */
export interface IProps {
  children?: ReactNode
  icon?: JSX.Element;
  innerRef?: any
  multiple?: boolean
  name: string
  onPick: (base64: any) => unknown
}
