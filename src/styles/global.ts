/**
 * IMPORTS
 */
import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { devices } from './devices';


/**
 * I am a global style.
 * This is where all the normalization css settings are set
 */
export default createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: background ease 0.2s;
  }


  h1{
    margin: 0;
  }

  textarea, button, input{
    background-color: transparent;
    border: none;
  }

  button {
    box-shadow: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    -webkit-box-shadow: none;
  }

  @-ms-viewport {
    width: device-width;
  }

  ${({ theme }) => css`
    body {
      color: ${props => props.theme.neutral9};
      background: ${props => props.theme.background};
      font-family: ${props => props.theme.fonts.primary};
    }

    p{
      color: ${props=>props.theme.neutral7};
    }

    // selection text theme settings
    *::selection {
      background: ${props => props.theme.neutral9};
      color: ${props => props.theme.secondary};
    }

    // scroll bar theme
    *::-webkit-scrollbar {
      width: 0.4rem;
      @media ${devices.tablet}{
        width: 0.2rem;
      }
    }

    *::-webkit-scrollbar-track {
      border-radius: 40px;
      background-color: ${props => props.theme.neutral3}70;
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 40px;
      background-color: ${props => props.theme.neutral6}60;
      transition: background-color 0.2s ease-out;
    }

    *:hover::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.neutral6}60;
    }

    // hover configs
    button,a{
      transition: all ease 0.4s;

      &:hover{
        ${props => props.theme.configs.hover};
      }
    }

    // links theme
    a {
      text-decoration: none;
    }
  `}
`;
