/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled icon.
 */
const $Icon = styled.div`
  color: ${props => props.theme.primaryDark};
  display: flex;
  font-size: 1.2rem;
  padding-right: 6px;

  [data-has-error="true"] & {
    color: #c72f2f
  }
`;


/**
 * I am a styled checkbox.
 */
const $Checkbox = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;

  input {
    cursor: inherit;
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  [data-has-error="true"] & + * {
    left: 0;
    position: relative;
  }
`;


/**
 * EXPORTS
 */
export { $Icon, $Checkbox };
