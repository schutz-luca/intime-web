import styled from "styled-components";
import {$Form as $LoginForm} from "pages/LoginPage/styles"

export const $ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1px;
`

export const $Form = styled($LoginForm)`
    margin: 10px 0;
    width: 60%;
`

export const $AvatarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    &>*{
        margin: 10px 0;
    }
`