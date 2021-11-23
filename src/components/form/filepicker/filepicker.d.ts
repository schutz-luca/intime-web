/**
 * File picker properties interface.
 */
export interface IProps {
  children?: ReactNode
  className?: string
  icon?: IconType;
  innerRef?: LegacyRef<HTMLInputElement>
  multiple?: boolean
  name: string
  onPick: (info, file?) => unknown
  acceptVideo?: boolean
}
