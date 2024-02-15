import { FormLabelSty } from "./style"


interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
    text: string
    for: string
}

export const FormLabel = (props: FormLabelProps)=>{
    return (
        <FormLabelSty htmlFor={props.for}>
            {props.text}
        </FormLabelSty>
    )
}