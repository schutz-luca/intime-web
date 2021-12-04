/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled description.
 */
const $Description = styled.div`
  color: ${props => props.theme.neutral5};
  font-size: 1.1rem;
  font-style: italic;
  margin-top: 1rem;
  text-align: center;
`;


/**
 * I am a styled empty state.
 */
const $Empty = styled.div`
  margin-top: 70px;
  align-items: center;
  color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  justify-content: center;
`;


/**
 * I am a styled title.
 */
const $Title = styled.h3`
  text-align: center;
  color: ${props => props.theme.neutral5};
  font-size: 1.7rem;
  margin-top: 1rem;
`;


/**
 * EXPORTS
 */
export { $Description, $Empty, $Title };

