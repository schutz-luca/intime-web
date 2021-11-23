import { motion } from "framer-motion";
import styled from "styled-components";
import { devices } from "styles/devices";

export const $LoginLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    height: 100vh;
    position: relative;
    overflow: hidden;

    @media ${devices.tablet}{
        grid-template-columns: 1fr;
    }
`

export const $Logo = styled.img`
    position: absolute;
    z-index: 2;
    width: 90px;
    height: 90px;
    top: 20px;
    left: 20px;

    @media ${devices.tablet}{
        left: unset;
    }
    @media ${devices.mobileM}{
        width: 60px;
        height: 60px;
    }

`

export const $LeftContainer = styled.div`
    z-index: 0;
    width: 100%;
    height: 100%;
    display: flex;

    img{
        position: relative;
        left: -10%;
        bottom: 0;
        width: 100%;
    }

    @media ${devices.tablet}{
        display: none;
    }
`

export const $RightContainer = styled.div`
    z-index: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const $Element = styled.img`
    position: absolute;
    z-index: 0;
    height: 80%;
    bottom: -40px;
    right: -40px;

`

export const $RightContent = styled(motion.div)`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.background};
    padding: 20px;
    border-radius: 15px;
    height: 600px;
    width: 500px;
    z-index: 1;
    box-shadow: 0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px ${props => props.theme.neutral5}90;

    @media ${devices.tablet}{
        height: 100vh;
        border-radius: 0;
        width: 100vw;
        box-shadow: none;
        background: ${props => props.theme.background}cc;
    }
`

/**
 * I am the animation variants.
 */
const ease = [0.43, 0.13, 0.23, 0.96];

export const variants = {
    initial: {
        opacity: 0,
        transition: { ease, duration: 0.3 },
        y: '-20px'
    },
    animate: {
        opacity: 1,
        transition: { ease, duration: 0.5 },
        y: 0
    },
    exit: {
        opacity: 0,
        transition: { ease, duration: 0.1 },
        y: '-20px'
    }
};