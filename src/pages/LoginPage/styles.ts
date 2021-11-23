
import styled from "styled-components";
import { devices } from "styles/devices";

/**
 * I am a styled form.
 */
export const $Form = styled.form`
 display: flex;
 align-items: stretch;
 flex-direction: column;
 width: 80%;
 margin-top: 3rem;

 @media ${devices.tablet}{
     width: 95%;
 }
`;