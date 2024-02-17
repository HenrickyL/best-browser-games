import { IconType } from "react-icons"
import { SideBarIconSty } from "./style"

interface SideBarIconProps{
    size?: number
    icon: IconType
}

export const SideBarIcon = ({icon, size}: SideBarIconProps)=>{
    return(
        <SideBarIconSty icon={icon} size={size} />
    )
}