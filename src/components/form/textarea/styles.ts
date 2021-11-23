/**
 * IMPORTS
 */
import styled from 'styled-components';
import { devices } from 'styles/devices';


/**
 * I am a styled textarea.
 */
const $Textarea = styled.div`
  border: 1px solid #ccc;
  border-radius: 0 0 20px 20px;
  overflow: hidden;

  font-size: 0.8rem;
  width: 100%;
  text-align: start;
  padding: 0.7rem 1rem;

  strong{
    margin-right: 5px;
  }

  @media ${devices.tablet} {
    border-top: 0;
    border-radius: 0;
  }

  textarea {
    background: none;
    border: none;
    border-radius: inherit;
    color: inherit;
    display: block;
    height: 25px;
    letter-spacing: inherit;
    line-height: 1.5rem;
    outline: none;
    padding: 0 8px;
    resize: none;
    text-align: center;
    text-shadow: inherit;
    width: 100%;
  }

  textarea::placeholder {
    color: inherit;
    opacity: 0.5;
  }
`;


/**
 * EXPORTS
 */
export { $Textarea };
