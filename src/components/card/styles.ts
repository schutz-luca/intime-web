/**
 * IMPORTS
 */
import { motion } from "framer-motion";
import styled from "styled-components";

export const $Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${props=>props.theme.colors.primaryDark};
    padding: 30px;
    border-radius: 15px;
    margin: 10px;
    text-align: center;
    width: 400px;

    h1,p,small{
        color: ${props=>props.theme.colors.white3};
    }
    `

export const $CardContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`