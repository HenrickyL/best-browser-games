import styled from "styled-components";
import { InputInput } from "../InputInput";


export const InputButtonSty = styled(InputInput)`
    background-color: ${prop=> prop.theme.primary};
    padding: 1rem;
`