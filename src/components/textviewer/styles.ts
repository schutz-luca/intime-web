/**
 * IMPORTS
 */
import styled from "styled-components"
import { devices } from "styles/devices"

export const $Label = styled.div`
    font-size: 13px;
    text-align: left;
    font-weight: ${props => props.theme.fonts.weight.bold};
    color: ${props => props.theme.secondary};
`

export const $Text = styled.div`
    font-size: 18px;
    min-height: 1em;
    text-align: left;
    display: flex;
    align-items: center;
    /* white-space: nowrap; */

    @media ${devices.desktop}{
        font-size: 16px;
    }

    @media ${devices.tablet}{
        white-space: unset;
    }

    button{
        margin-left: 10px;
        background: ${props=>props.theme.neutral6}90;
    }
`

export const $TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 6px 4px;
    border-radius: 15px;
    padding: 10px 15px;
    line-height: 20px;

    
    input, select{
        color: ${props => props.theme.neutral};
    }

    input,select, div{
    }
    p{
        text-align: left;
    }
`