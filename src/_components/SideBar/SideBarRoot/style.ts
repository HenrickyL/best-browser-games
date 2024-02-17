import styled from "styled-components";

export const SideBarRootSty = styled.nav`
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 1rem;
    width: 100px;
    height: 100%;
    background: #2f363e;
    box-shadow: 25px 25px 75px rgba(0,0,0,0.25),
        10px 10px 70px rgba(0,0,0,0.25),
        inset 5px 5px 10px rgba(0,0,0,0.5),
        inset 5px 5px 20px rgba(255,255,255,0.2),
        inset -5px -5px 15px rgba(0,0,0,0.75);

    
`