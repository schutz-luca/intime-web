/**
 * IMPORTS
 */
import React from 'react';
import { IProps } from './filepicker.d';
import { $Content, $FilePicker } from './styles';


/**
 * I am a file picker component.
 */
const FilePicker = (props: IProps): React.ReactElement => {
  // create file object
  const create = (file) => {
    // get properties
    const { name, type } = file;

    // create url
    const url = window.URL.createObjectURL(file);

    // call pick handler
    props.onPick({ name, type, url }, file);
  };

  // handle pick files
  const onPick = (event) => {
    // get files
    const { files } = event.target;

    // add each file
    [].map.call(files, create);
  };

  return (
    <$FilePicker className={props.className}>
      <input
        onChange={onPick}
        multiple={!!props.multiple}
        name={props.name}
        ref={props.innerRef}
        type="file"
        accept={`image/*${props.acceptVideo ? ',video/*' : ''}`}
      />

      {props.icon && <props.icon />}

      {props.children && <$Content>{props.children}</$Content>}
    </$FilePicker>
  );
};


/**
 * EXPORTS
 */
export { FilePicker };
