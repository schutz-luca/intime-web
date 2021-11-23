/**
 * IMPORTS
 */
import React, { useState } from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import { IProps } from './checkbox.d';
import { $Icon, $Checkbox } from './styles';


/**
 * I am a checkbox component.
 */
const Checkbox = ({ children, innerRef, ...props }: IProps): React.ReactElement => {
  // set state
  const [checked, setChecked] = useState(props.checked);

  // handle change
  const handleChange = (event) => {
    setChecked(!!event.target.checked);
  };

  return (
    <$Checkbox>
      <input
        {...props}
        onChange={handleChange}
        ref={innerRef}
        type="checkbox"
      />

      <$Icon>
        {checked ? <FiCheckSquare /> : <FiSquare />}
      </$Icon>

      <div>{children}</div>
    </$Checkbox>
  );
};


/**
 * EXPORTS
 */
export { Checkbox };
