import { InputButtonSty } from "./style"

interface InputButtonProps{
    text?: string
}


export const InputButton = (prop: InputButtonProps)=>{
    return (
        <InputButtonSty value={prop.text || "button" } type="button"/>
    )
}