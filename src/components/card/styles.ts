/**
 * IMPORTS
 */
import { motion } from "framer-motion";
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