import { motion } from "framer-motion";
import styled from "styled-components";

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
    background: ${props=>props.theme.colors.black}90;

`

export const $ModalForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    gap: 10px;
    text-align: center;

    &>*{
        width: 100%;
    }

    h1{
        margin: 20px 0;
    }
`

export const $Modal = styled.div`
    position: relative;
    margin: 30px;
    padding: 50px 30px;
    padding-top: 10px;
    background: ${props=>props.theme.background};
    border-radius: 15px;
    z-index: 11;
`

export const $CloseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0px 0;
    width: 100%;

    button{
        padding: 5px;
        background: transparent;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        margin-bottom: 10px;

        svg{
            height: 100%;
            width: 100%;
        }
    }
`