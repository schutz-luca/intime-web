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
    color: ${props => props.theme.colors.white3};

    div{
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        margin: 0 10px;
        font-size: 35px;
    }
    p{
        font-size: 14px;
    }
`