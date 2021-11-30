
import { NavLink } from "react-router-dom";
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
 margin: 3rem 0;

 @media ${devices.tablet}{
     width: 95%;
 }

 p,small{
     margin-top: 30px;
     color: ${props=>props.theme.neutral8}
 }
`;

export const $Link = styled(NavLink)`
    color: ${props=>props.theme.colors.primary};
    margin: 0 5px;
`
