/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled icon.
 */
const $Icon = styled.span`
  align-items: center;
  border-radius: inherit;
  color: ${props => props.theme.colors.primaryDark};
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  height: 100%;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;

  &.icon{
    color: ${props=>props.theme.neutral6};
    
    &:hover{
      transform: none;
      cursor: unset;
    }
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

/**
 * I am a styled input.
 */
const $Input = styled.div`
  padding: 2px 20px;
  border: 2px solid ${props => props.theme.neutral5}90;
  border-radius: 15px;
  transition: border-color 0.2s ease-in-out;
  position: relative;

  &:focus-within{
    border-color: ${props => props.theme.primary};
  }

  [data-has-error="true"] & {
    input {
      border-color: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.red}
    }
  }

  input {
    height: 40px;
    border: none;
    border-radius: inherit;
    color: ${props => props.theme.colors.primaryDark};
    outline: none;
    padding: 8px 0;
    width: 100%;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 100px #fff inset;
  }
`;


/**
 * EXPORTS
 */
export { $Icon, $Input };
