/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled select.
 */
const $Select = styled.div`
  padding: 2px 20px;
  border: 2px solid ${props => props.theme.neutral5}90;
  transition: border-color 0.2s ease-in-out;
  border-radius: 15px;

  &:focus-within {
    border-color: ${props => props.theme.primary};
  }

  [data-has-error="true"] & {

    select {
      border-color: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.red}
    }
  }

  select {
    height: 40px;
    border: none;
    color: ${props => props.theme.neutral7};
    outline: none;
    padding: 8px 0;
    width: 100%;
    background: none;
  }
`;


/**
 * EXPORTS
 */
export { $Select };
