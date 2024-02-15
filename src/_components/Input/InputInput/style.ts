import styled from "styled-components";

interface InputSty{
    background?: string
}

export const InputSty = styled.input<InputSty>`
    background-color: ${prop=>prop.theme.background};
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 2px 4px;
    color: ${prop => prop.theme.contrast};

    &[type="button"] {
        background-color: ${prop => prop.background || prop.theme.primary };
        font-weight: bold;
    }
`