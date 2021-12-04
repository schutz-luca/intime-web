/**
* IMPORTS
*/
import styled from 'styled-components';


/**
* I am a styled content.
*/
const $Content = styled.div`
  margin-left: 0.5rem;
`;


/**
* I am a styled file picker.
*/
const $FilePicker = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
  position: relative;

  input[type="file"] {
    cursor: inherit;
    opacity: 0;
    position: absolute;
  }
`;


/**
 * EXPORTS
 */
export { $Content, $FilePicker };
