/**
 * IMPORTS
 */
import styled from "styled-components";
import { Button } from "components/button";
import { ellipsis } from "polished";

export const $CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h2, h3, p, small{
        ${ellipsis('100%')}
        width: 100%;
    }

    h3{
        font-size: 18px;
        font-weight: 200;
    }

    h2{
        font-size: 18px;
        line-height: 42px;
    }
    p{
        font-size: 14px;
        opacity: 0.9;
        margin-top: 5px;
    }
    
    small {
        font-size: 12px;
        opacity: 0.7;
    }
`

export const $SelectButton = styled(Button)`
    background: ${props => props.theme.colors.green};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    height: 30px;
    width: 30px;
    border-radius: 50%;

    svg{
         height: 100%;
         width: 100%;
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