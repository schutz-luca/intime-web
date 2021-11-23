/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled error.
 */
const $Error = styled.span`
  background: ${props => props.theme.background};
  bottom: -6px;
  color: ${props => props.theme.colors.red};
  font-size: 0.75rem;
  line-height: 0.8rem;
  padding: 0 5px;
  position: absolute;
  left: 15px;
  white-space: nowrap;
  z-index: 10;
`;


/**
 * I am a styled form field.
 */
const $Field = styled.label`
  filter: grayscale(1);
  margin-bottom: 1.8rem;
  position: relative;
  transition: filter 0.5s ease-out;
  z-index: 1;

  &[data-has-error="true"],
  &:focus-within {
    filter: none;
    transition: none;
  }
`;


/**
 * I am a styled label.
 */
const $Label = styled.div`
  background: ${props => props.theme.background};
  color: ${props=>props.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: ${props => props.theme.fonts.weight.bolder};
  left: 20px;
  padding: 0 5px;
  position: absolute;
  top: 0px;
  transform: translateY(-50%);
  z-index: 10;
`;


/**
 * EXPORTS
 */
export { $Error, $Field, $Label };
