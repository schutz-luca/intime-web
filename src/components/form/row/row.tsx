/**
 * IMPORTS
 */
import { IProps } from './row.d';
import { $Row } from './styles';


/**
 * I am a form row component
 */
const Row = (props: IProps) => (
  <$Row>{props.children}</$Row>
);


/**
 * EXPORTS
 */
export { Row };
