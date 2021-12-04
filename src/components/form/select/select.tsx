/**
 * IMPORTS
 */
import React, { useState } from 'react';
import { IProps } from './select.d';
import { $Select } from './styles';


/**
 * I am a select component
 */
const Select = (props: IProps): React.ReactElement => {

  const [value, setValue] = useState(props.value);

  const handleChange = (event): void => {

    const { value } = event.target;

    setValue(value);

    if (!!props.onChange)
      props.onChange(value);
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
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </$Select>
  );
};


/**
 * EXPORTS
 */
export { Select };
