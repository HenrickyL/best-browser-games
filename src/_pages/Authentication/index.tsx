import { LoginDivSty, LoginSty, SpanSty } from "./style"
import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { Icon } from "../../_components/Icon";

import { MdLogin as LoginIcon} from "react-icons/md";

import { 
    FaHeart as HeartIcon,
    FaUser as SignUpIcon } from "react-icons/fa";
import { IconType } from "react-icons";
import { ReactNode, useState } from "react";


const Login = ()=>{
    return(
        <>
            <Form.Field id="aaa">
                <Input.Root>
                    <Input.Field>
                        <Input.Icon icon={EmailIcon} />
                        <Input.Input id="email" placeholder="Email"/>
                    </Input.Field>
                </Input.Root>
            </Form.Field>
            <Form.Field id="ccc">
                    <Input.Root>
                        <Input.Password placeholder="Password"/>
                    </Input.Root>
            </Form.Field>
            <Form.Field id="ccc">
                    <Input.Root>
                        <Input.Password placeholder="Password"/>
                    </Input.Root>
            </Form.Field>
        </>
    )
}


const SignUp = ()=>{
    return(
        <>
            <Form.Field id="aaa">
                <Input.Root>
                    <Input.Field>
                        <Input.Icon icon={EmailIcon} />
                        <Input.Input id="email" placeholder="Email"/>
                    </Input.Field>
                </Input.Root>
            </Form.Field>
            <Form.Field id="ccc">
                    <Input.Root>
                        <Input.Password placeholder="Password"/>
                    </Input.Root>
            </Form.Field>
        </>
    )
}
interface Content{
    title: string,
    icon: IconType,
    component: ReactNode,
    toggle: string,
    buttonTitle: string

}


const loginContent : Content = {
    icon: LoginIcon,
    title: 'Login',
    component: <Login />,
    toggle: 'sign-up',
    buttonTitle: 'Sign-in'
}

const signUpContent : Content = {
    icon: SignUpIcon,
    title: 'Sign Up',
    component: <SignUp />,
    toggle: 'login',
    buttonTitle: 'Sign-up'

}

export const Authentication = ()=>{
    const [content, setContent] = useState<Content>(loginContent)


    const handleToggleClick = ()=>{
        setContent(content == loginContent ? signUpContent : loginContent)
    }
    return(
        <LoginSty>
            <LoginDivSty>
                <Form.Root  action="post">
                    <Form.Title >
                        <Icon icon={content.icon}/>
                        <h2>{content.title}</h2>
                        <Icon icon={HeartIcon}/>
                    </Form.Title>
                    {content.component}
                    <Input.Button type="submit" text={content.buttonTitle}/>
                    <SpanSty onClick={handleToggleClick}>
                        <span>
                            {content.toggle}
                        </span>
                    </SpanSty>
                    </Form.Root>
            </LoginDivSty>
        </LoginSty>
    )
}