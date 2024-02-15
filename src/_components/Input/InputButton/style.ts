import styled from "styled-components";
import { InputInput } from "../InputInput";


export const InputButtonSty = styled(InputInput)`
    background-color: ${prop=> prop.theme.primary};
    width: 100%;
    height: 100%;
    &:hover{
        background-color: ${prop=> prop.theme.secondary};
    }
`