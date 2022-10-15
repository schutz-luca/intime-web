import { motion } from "framer-motion";
import styled from "styled-components";
import { devices } from "styles/devices";

export const $ModalContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const $ModalBackground = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${props => props.theme.colors.black}90;

`

export const $ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    overflow: auto;

    &>*{
        width: 100%;
    }

    h1{
        margin-bottom: 20px;
    }
`

export const $Modal = styled.div`
    position: fixed;
    background: ${props => props.theme.background};
    border-radius: 15px;
    z-index: 11;
    
    max-height: 80%;
    max-width: 70%;
    overflow: auto;

    @media ${devices.tablet}{
        max-width: unset;
        width: 85%;
    }
`

export const $CloseContainer = styled.div`
    position: sticky;
    top: 0;
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: ${props => props.theme.background};

    button{
        padding: 5px;
        background: transparent;
        height: 100%;

        svg{
            height: 100%;
            width: 100%;
            color: ${props => props.theme.neutral7};
        }
    }
`

export const $ModalChildren = styled.div`
    padding: 0 30px 20px;
`