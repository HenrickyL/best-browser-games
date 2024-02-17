import { IconType } from "react-icons"
import { InputButtonSty } from "./style"

interface InputButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text?: string
    icon?: IconType
}


export const InputButton = (props: InputButtonProps)=>{
    return (
        <InputButtonSty >
            {props.icon && <props.icon />}
            {props.text}
        </InputButtonSty>
    )
}