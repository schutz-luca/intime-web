/**
 * IMPORTS
 */
import React from 'react';
import { IProps } from './field.d';
import { $Error, $Field, $Label } from './styles';


/**
 * I am a form field component.
 */
const Field = (props: IProps): React.ReactElement => (
  <$Field data-has-error={!!props.error}>
    {props.label && <$Label>{props.label}</$Label>}

    {props.children}

    <$Error>{props.error}</$Error>
  </$Field>
);


/**
 * EXPORTS
 */
export { Field };
