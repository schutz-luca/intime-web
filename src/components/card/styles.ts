/**
 * IMPORTS
 */
import { Button } from "components/button";
import { motion } from "framer-motion";
import { ellipsis } from "polished";
import styled from "styled-components";

export const $Card = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.primaryDark};
    padding: 20px;
    border-radius: 15px;
    margin: 10px;
    text-align: center;

    transition: all ease-out 0.3s;

    &:hover{
        transform: scale(1.04);
        box-shadow: 0 2px 10px rgb(0 0 0 / 50%);
    }

    &.clickable{
        cursor: pointer;
    }

    h1,h2,h3,p,small{
        color: ${props => props.theme.colors.white3};
    }
    `

export const $CardContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(320px, 25% - 32px), 1fr));
    grid-gap: 16px;
`

export const $CardContent = styled.div`
    display: flex;

    .info{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: start;
        overflow: hidden;
    }
`

export const $CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h2, h3, p, small{
        ${ellipsis('100%')}
        width: 100%;
    }

    h3{
        font-size: 16px;
        font-weight: 200;
    }

    h2{
        font-size: 22px;
    }
    p{
        font-size: 14px;
        opacity: 0.9;
        margin-top: 5px;

        &.description{
            margin: 0;
            margin-bottom: 8px;
        }
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
    height: 38px;
    width: 38px;
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