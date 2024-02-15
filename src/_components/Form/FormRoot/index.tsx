import { ReactNode } from "react"
import { FormRootSty } from "./style"

interface FormRootProps extends React.FormHTMLAttributes<HTMLFormElement>{
    chieldren: ReactNode
}

export const FormRoot = ({chieldren}: FormRootProps)=>{
    return(
        <FormRootSty>
            {chieldren}
        </FormRootSty>
    )
    
}