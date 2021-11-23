/**
 * IMPORTS
 */
import React from 'react';
import { IProps } from './row.d';
import { $Row } from './styles';


/**
 * I am a form row component.
 */
const Row = (props: IProps): React.ReactElement => (
  <$Row>{props.children}</$Row>
);


/**
 * EXPORTS
 */
export { Row };
