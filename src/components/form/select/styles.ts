/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled select.
 */
const $Select = styled.div`
  padding: 2px 0;
  border-bottom: 2px solid ${props => props.theme.gray}90;
  transition: border-color 0.2s ease-in-out;

  &:focus-within {
    border-color: ${props => props.theme.primary};
  }

  [data-has-error="true"] & {

    select {
      border-color: ${props => props.theme.red};
      color: ${props => props.theme.red}
    }
  }

  select {
    height: 40px;
    border: none;
    border-radius: inherit;
    color: ${props => props.theme.primaryDark};
    outline: none;
    padding: 8px 0;
    width: 100%;
  }
`;


/**
 * EXPORTS
 */
export { $Select };
