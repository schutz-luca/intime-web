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
        background: ${props => props.theme.neutral6}90;
    }
`

export const $CopyButton = styled.div`
    background: ${props => props.theme.colors.gray2}90;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-left: 5px;

    svg{
        color: ${props => props.theme.colors.white3};
         height: 100%;
         width: 100%;
    }

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.primary}90;
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