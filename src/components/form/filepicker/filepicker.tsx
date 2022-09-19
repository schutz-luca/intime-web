/**
 * IMPORTS
 */
import React from 'react';
import { toBase64 } from 'utils/toBase64';
import { IProps } from './filepicker.d';
import { $Content, $FilePicker } from './styles';


/**
 * I am a file picker component.
 */
const FilePicker = (props: IProps) => {

  // create file object
  const create = (file) => {
    const { name, type } = file;

    const url = window.URL.createObjectURL(file);

    // call pick handler
    props.onPick({ name, type, url }, file);
  };

  // handle pick files
  const onPick = (event) => {
    const { files } = event.target;

    // add each file
    [].map.call(files, create);
  };

  return (
    <$FilePicker >
      <input
        onChange={onPick}
        multiple={!!props.multiple}
        name={props.name}
        ref={props.innerRef}
        type="file"
        accept={`image/*`}
      />

      {props.icon && props.icon}

      {props.children && <$Content>{props.children}</$Content>}
    </$FilePicker>
  );
};


/**
 * EXPORTS
 */
export { FilePicker };
