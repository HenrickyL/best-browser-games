import { ReactNode } from "react"
import { FormRootSty } from "./style"

interface FormRootProps extends React.FormHTMLAttributes<HTMLFormElement>{
    children: ReactNode
}

export const FormRoot = ({children}: FormRootProps)=>{
    return(
        <FormRootSty>
            {children}
        </FormRootSty>
    )
    
}