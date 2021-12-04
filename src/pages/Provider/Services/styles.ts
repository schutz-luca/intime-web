import { Button } from "components/button";
import styled from "styled-components";
import { $ThemeButton } from "templates/ThemeButton/styles";

export const $ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

export const $CreateButton = styled(Button)`
    border-radius: 50%;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.colors.white3};
    z-index: 2;
    width: 50px;
    height: 50px;
    padding: 8px;


    svg{
        height: 100%;
        width: 100%;
    }
`