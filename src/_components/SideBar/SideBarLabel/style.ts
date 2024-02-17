import styled from "styled-components";

export const SideBarLabelSty = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 80px;
    font-size: 1.25em;
    background-color: ${prop=>prop.theme.primaryLight};
    padding: 4px 15px;
    border-radius: 15px;
    box-shadow: 5px 5px 7px rgba(0,0,0,0.25),
    inset -3px -3px 5px rgba(0,0,0,0.5);
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;

    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: -4px;
        width: 10px;
        height: 10px;
        background-color: ${prop=>prop.theme.primaryLight};
        transform: translateY(-50%) rotate(45deg);
    }
`