import styled from "styled-components";

export const $AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    background: ${props => props.theme.primary};

    svg{
        width: 100%;
        height: 100%;
        padding: 20%;
        color: ${props=>props.theme.colors.white3};
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`