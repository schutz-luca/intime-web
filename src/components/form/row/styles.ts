/**
 * IMPORTS
 */
import styled from 'styled-components';
import { devices } from 'styles/devices';


/**
 * I am a styled form row.
 */
const $Row = styled.span`
  display: flex;

  > * {
    flex: 1;
  }

  > * + * {
    margin-left: 1rem;
  }
  @media ${devices.tablet}{
    flex-direction: column;
    > * {
      flex: none;
    } 
    > * + * {
      margin-left: 0;
    }
  }
`;


/**
 * EXPORTS
 */
export { $Row };
