/**
 * IMPORTS
 */
import { IconType } from 'react-icons';


/**
 * Empty state properties type.
 */
export interface IProps {
  children?: ReactNode
  description?: string
  icon: IconType
  title: string
  visible?: boolean
}


/**
 * Empty state default properties.
 */
export const defaultProps: IProps = {
  visible: true
};
