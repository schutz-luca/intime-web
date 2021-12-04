/**
 * IMPORTS
 */
import React from 'react';
import { IProps } from './button.d';
import { $Button } from './styles';


/**
 * I am a button component.
 */
const Button = ({ children, ...props }: IProps): React.ReactElement => (
  <$Button {...props}>
    {children}
  </$Button>
);


/**
 * EXPORTS
 */
export { Button };
