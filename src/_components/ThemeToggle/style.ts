import styled from "styled-components";

interface ThemeToggleStyProps{
    isLight: boolean
}
export const ThemeToggleSty = styled.div<ThemeToggleStyProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    border-radius: 50%;
    color: ${prop=> prop.theme.contrast};
    border: 1px solid ${prop=> prop.theme.contrast};;
    background-color: ${prop=>prop.theme.gray};
    font-weight: bold;
    svg{
        width: 100%;
        height: 100%;
    }
`