import styled from "styled-components";
import { $AlignCenter } from "styles/utils";

export const $AvatarContainer = styled($AlignCenter)`
    margin: 10px 0;
`

export const $Title = styled.h1`
    width: 100%;
    text-align: center;
    margin-top: 8px;
    color: ${props=>props.theme.primary};

    &.sub{
        font-size: 22px;
    }
`