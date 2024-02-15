import { ReactNode } from "react"
import { FormFieldSty } from "./style"

interface FormFieldProps{
    children: ReactNode
}

export const FormField = ({children}: FormFieldProps)=>{
    return (
        <FormFieldSty>
            {children}
        </FormFieldSty>
    )
}