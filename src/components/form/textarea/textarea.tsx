/**
 * IMPORTS
 */
import React from 'react';
import { IProps } from './textarea.d';
import { $Textarea } from './styles';


/**
 * I am a textarea component.
 */
const Textarea = ({ autoExpand, ...props }: IProps): React.ReactElement => {
  // set max height
  const maxHeight = props.maxHeight ?? 150;

  // handle input event
  const handleInput = (event) => {
    // not auto expand: do nothing
    if (autoExpand === false) return;

    // get element
    const textarea = event.target;

    // auto expand textarea
    textarea.style.height = '';
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
  };

  return (
    <$Textarea>
      <textarea {...props} onInput={handleInput} ref={props.innerRef}/>
    </$Textarea>
  );
};


/**
  * EXPORTS
  */
export { Textarea };
