/**
 * Button properties type.
 */
export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}
