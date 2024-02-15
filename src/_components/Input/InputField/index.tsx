import { ReactNode } from "react"
import { InputFieldSty } from "./style"

interface InputFieldProps{
    children: ReactNode
}

export const InputField = ({children}: InputFieldProps)=>{
    return (
        <InputFieldSty>
            {children}
        </InputFieldSty>
    )
}