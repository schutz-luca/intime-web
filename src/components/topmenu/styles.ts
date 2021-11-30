/**
 * IMPORTS
 */
import { Button } from "components/button";
import { Input } from "components/form/input";
import styled from "styled-components";

export const $TopMenuContainer = styled.header`
    position: sticky;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 80px;
    background-color: ${props => props.theme.neutral2}90;
    box-shadow: inset 0 -0.2px 0 ${props => props.theme.neutral6};
    top: 0;
    z-index: 3;
    padding: 0;
`

export const $TopMenuContent = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 0 200px;
`

export const $Logo = styled.img`
    height: 70px;
`

export const $MenuButton = styled(Button)`
    background: transparent;
    border-radius: 50%;
    color: ${props => props.theme.neutral8};
    width: 50px;
    height: 50px;
    padding: 8px;

    &:hover{
        background: ${props => props.theme.neutral4}50;
    }

    svg{
        height: 100%;
        width: 100%;
    }
`

export const $MenuOption = styled($MenuButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    padding: 0 8px;
    height: auto;
    width: auto;
    svg{
        padding: 8px 0;
        width: 40px;
        height: 40px;
    }
    p{
        font-size: 11;
    }
`

export const $SearchField = styled.div`
    width: 30%;
    div{
        width: 100%;
    }
`