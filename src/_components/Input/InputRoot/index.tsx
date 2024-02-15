import { ReactNode } from "react"

interface InputRoot{
    children: ReactNode
}

export const InputRoot = ({children}:InputRoot)=>{
    return (
        <div>
            {children}
        </div>
    )
}