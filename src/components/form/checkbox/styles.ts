/**
 * IMPORTS
 */
import styled from 'styled-components';

export const $Icon = styled.div`
  color: ${props => props.theme.primary};
  display: flex;
  font-size: 1.2rem;
  padding-right: 6px;

  [data-has-error="true"] & {
    color: ${props => props.theme.colors.red};
  }
`;


export const $Checkbox = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;

  input {
    cursor: inherit;
    opacity: 0;
    position: absolute;
  }

  [data-has-error="true"] & + * {
    left: 0;
    position: relative;
  }
`;