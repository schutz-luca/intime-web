/**
 * IMPORTS
 */
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IProps } from './input.d';
import { $Icon, $Input } from './styles';


/**
 * I am an input base component.
 */
const BaseInput = (props: IProps): React.ReactElement => {
  // set state
  const [passwordShown, setPasswordShown] = useState(false);

  // set type
  let { type } = props;

  type = type === 'password' && passwordShown ? 'text' : type;

  // toggle icon visibility
  const passwordIcon = () => {
    // not password type: do nothing
    if (props.type !== 'password') return;

    // toggle icon visibility
    const toggle = () => setPasswordShown(!passwordShown);

    // get icon
    const Eye = passwordShown ? AiOutlineEye : AiOutlineEyeInvisible;

    // return password icon
    return (
      <$Icon onClick={toggle}>
        <Eye />
      </$Icon>
    );
  };

  return (
    <$Input>
      <input {...props} type={type} ref={props.innerRef} />

      {passwordIcon()}
    </$Input>
  );
};


/**
 * EXPORTS
 */
export { BaseInput };
