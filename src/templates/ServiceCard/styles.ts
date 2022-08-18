/**
 * IMPORTS
 */
import styled from "styled-components";
import { Button } from "components/button";
import { devices } from "styles/devices";

export const $CardTitle = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.white3};
    margin-bottom: 10px;
    padding: 10px 0;

    h2, h3{
        color: ${props => props.theme.colors.white3};
    }

    h2{
        font-size: 40px;
    }
`

export const $SelectButton = styled(Button)`
    margin-top: 10px;
    background: ${props => props.theme.colors.green};
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        margin-right: 5px;
         height: 20px;
         width: 20px;
    }
`

export const $DeleteButton = styled($SelectButton)`
    background: ${props => props.theme.colors.red};
`

export const $ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    &>*{
        margin: 0 5px;
    }

    @media ${devices.tablet}{
        display: block;
    }
`