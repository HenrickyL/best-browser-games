import { IconType } from 'react-icons';
import { FaQuestion as Question } from "react-icons/fa6";
interface InputIconProps{
    icon?: IconType
    size?: number
}

export const InputIcon = ({icon: Icon = Question, size }: InputIconProps)=>{
    const IconComponent: IconType = Icon || Question;
    return (
        <>
        <IconComponent size = {size}/>
        </>
    )
}