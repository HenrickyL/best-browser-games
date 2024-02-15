import { Input } from ".."
import { InputPasswordSty } from "./style"
import { 
    IoMdEye as EyeIcon,
    IoMdEyeOff as EyeOffIcon,
    IoMdUnlock as PasswordOffIcon,
    IoMdLock as PasswordIcon} from "react-icons/io";
import { useState } from "react";


interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement>{
}

export const InputPassword = ({...rest}:InputPasswordProps)=>{
    const [isPassword, setIsPassword] = useState<boolean>(true)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setIsPassword(!isPassword)
    }



    return (
        <Input.Field>
            <Input.Icon icon={isPassword ? PasswordIcon : PasswordOffIcon} size={20}/>
            <InputPasswordSty  {...rest} type={isPassword ? 'password' : 'text'} />
            <button onClick={handleClick}>
                {isPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
        </Input.Field>
    )
}