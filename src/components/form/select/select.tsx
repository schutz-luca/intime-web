/**
 * IMPORTS
 */
import React, { useState } from 'react';
import { IProps } from './select.d';
import { $Select } from './styles';


/**
 * I am a select component.
 */
const Select = (props: IProps): React.ReactElement => {
  // set state
  const [value, setValue] = useState(props.value);

  // handle select change
  const handleChange = (event): void => {
    // get value
    const { value } = event.target;

    // set new value
    setValue(value);

    // has handler property: call it
    if (props.onChange !== undefined) props.onChange(value);
  };

  return (
    <$Select>
      <select
        name={props.name}
        onChange={handleChange}
        ref={props.innerRef}
        value={value}
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.name}</option>
        ))}
      </select>
    </$Select>
  );
};


/**
 * EXPORTS
 */
export { Select };
