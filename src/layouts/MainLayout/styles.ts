/** 
 * IMPORTS
 */
import { motion } from "framer-motion";
import styled from "styled-components";
import { devices } from "styles/devices";

export const $MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`

export const $Content = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: calc(100% - 80px);
    overflow: hidden;
    @media ${devices.tablet} {
        padding: 0;
    }
`
export const $ContentContent = styled.div`
    overflow: auto;
    overflow-x: hidden;
    padding: 10px 20px;
`

export const $ContentFixed = styled.div`
    padding: 10px;
`

const ease = [0.43, 0.13, 0.23, 0.96];

export const variants = {
    initial: {
        opacity: 0,
        transition: { ease, duration: 0.3 },
        x: '-10%'
    },
    animate: {
        opacity: 1,
        transition: { ease, duration: 0.5 },
        x: 0
    },
    exit: {
        opacity: 0,
        transition: { ease, duration: 0.1 },
        x: '-10%'
    }
};