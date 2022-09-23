/**
 * IMPORTS
 */
import styled from "styled-components";
import { Button } from "components/button";

export const $SelectButton = styled(Button)`
    margin-top: 10px;
`

export const $Time = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.white3};
    margin: 8px 0;

    div{
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        margin: 0 7px;
        font-size: 18px;
    }
    p{
        font-size: 12px;
    }
`

export const $Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .provider{
        font-size: 14px;
    }
`