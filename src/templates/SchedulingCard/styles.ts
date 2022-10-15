/**
 * IMPORTS
 */
import styled from "styled-components";
import { Button } from "components/button";
import { devices } from "styles/devices";

export const $SelectButton = styled(Button)`
    margin-top: 10px;
`

export const $CardTitle = styled.div`
    margin: 6px 0;
`

export const $Time = styled.div`
    display: flex;
    align-items: align-center;
    color: ${props => props.theme.colors.white3};
    margin: 6px 0;
    flex-direction: column;
    align-items: flex-start;

    .date{
        margin: 0;
    }

    div, .date{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-size: 18px;
    }
    p{
        font-size: 12px;
        width: auto;
        margin: 0 7px;
    }
`

export const $Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 14px;
    }

    .provider{
        font-size: 16px;
    }
`

export const $DeleteButton = styled($SelectButton)`
    background: ${props => props.theme.colors.red};
`

export const $ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    &>*{
        margin: 0 5px;
    }
`