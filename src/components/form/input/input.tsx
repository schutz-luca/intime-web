/**
 * IMPORTS
 */
import React from 'react';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { BaseInput } from './baseinput';
import { IProps } from './input.d';


/**
 * I am an input component.
 */
const Input = (props: IProps): React.ReactElement => {
  // controller unavailable: return base input
  if (!props.control) return <BaseInput {...props} />;

  // return controlled input
  return (
    <Controller
      render={({ onChange, value }) => (
        <InputMask {...props} value={value} onChange={onChange}>
          {(inputProps) => <BaseInput {...inputProps} />}
        </InputMask>
      )}
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
    />
  );
};


/**
 * EXPORTS
 */
export { Input };
