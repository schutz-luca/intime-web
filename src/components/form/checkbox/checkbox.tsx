/**
 * IMPORTS
 */
import React, { useState } from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import { IProps } from './checkbox.d';
import { $Icon, $Checkbox } from './styles';

/**
 * I am a checkbox component
 */
export const Checkbox = (props: IProps): React.ReactElement => {
  const [checked, setChecked] = useState(props.checked);

  const handleChange = (event) => {
    setChecked(!checked);
  };

  return (
    <$Checkbox onClick={handleChange}>
      <input
        {...props}
        onChange={handleChange}
        ref={props.innerRef}
        type="checkbox"
        checked={checked}
      />

      <$Icon onClick={handleChange}>
        {checked ? <FiCheckSquare /> : <FiSquare />}
      </$Icon>

      <div>{props.children}</div>
    </$Checkbox>
  );
};