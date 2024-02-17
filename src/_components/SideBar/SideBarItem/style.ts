import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SideBarIconSty } from "../SideBarIcon/style";
import { SideBarLabelSty } from "../SideBarLabel/style";

export const SideBarItemSty = styled(NavLink)`
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;

    &::before{
        content: '';
        top: calc(50% - 2.5px);
        position: absolute;
        left: 20px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        transition: 0.5s;
    }

    &.active{
        &:hover ${SideBarLabelSty}{
            left: 140px;
            opacity: 1;
            visibility: visible;
        }
        & ${SideBarIconSty}{
            transform: translate(45px);
            color: ${prop=>prop.theme.white};
            background-color:  ${prop=>prop.theme.primaryLight};
            box-shadow: 5px 5px 7px rgba(0,0,0,0.25),
            inset 2px 2px 3px rgba(255,255,255,0.25),
            inset -3px -3px 5px rgba(0,0,0,0.5);
            transition-delay: 0s;
            &:hover{
                color: ${prop=>prop.theme.white2};
            }
            &::before{
                transform: scale(1);
            }
        }

        &::before{
            background-color: ${prop=>prop.theme.primary};
            box-shadow: 0 0 5px ${prop=>prop.theme.primary},
                0 0 10px ${prop=>prop.theme.primary},
                0 0 20px ${prop=>prop.theme.primary},
                0 0 30px ${prop=>prop.theme.primary},
                0 0 40px ${prop=>prop.theme.primary},
                0 0 50px ${prop=>prop.theme.primary};
        }
    }

    &:hover{
        ${SideBarLabelSty}{
            opacity: 1;
            visibility: visible;
        }
        ${SideBarIconSty}{
            color: ${prop=>prop.theme.primaryLight}
        }
    }
    
`