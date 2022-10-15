import styled from "styled-components"

export const ellipsis = `
    display: -webkit-box;
    max-width: 400px;
    height: 109.2px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.625;
`

export const $Error = styled.div`
    color: ${props => props.theme.colors.red};
    margin-top: -20px;
    margin-bottom: 10px;
`

export const $AlignCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`