/**
 * IMPORTS
 */
import styled, { css } from "styled-components"
import { devices } from "styles/devices"

export const $Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 34px;
    font-weight: 600;
    color: ${props => props.theme.neutral9};
    @media ${devices.desktop}{
        font-size: 28px;
    }
`

export const $Subtitle = styled.div`
    margin-top: 5px;
    font-weight: ${props => props.theme.fonts.weight.bold};
    color: ${props => props.theme.neutral9}dd;
    font-size: 16px;
    @media ${devices.desktop}{
        font-size: 12px;
    }
`