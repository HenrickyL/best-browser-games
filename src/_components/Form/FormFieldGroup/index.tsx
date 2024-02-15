import { ReactNode } from "react"
import { FormFieldGroupSty } from "./style"

interface FormFieldGroupProps{
    children: ReactNode
}

export const FormFieldGroup = ({children}: FormFieldGroupProps)=>{
    return (
        <FormFieldGroupSty>
            {children}
        </FormFieldGroupSty>
    )
}