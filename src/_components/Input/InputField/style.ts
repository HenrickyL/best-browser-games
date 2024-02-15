import styled from "styled-components";

export const InputFieldSty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 4px;
    border: 2px solid ${prop=> prop.theme.contrastLight};
    border-radius: 8px;
    padding: 12px;
    transition: 400ms;

    &:hover{
        border: 2px solid ${prop=> prop.theme.contrast};
    }
`