import { AuthBase, Content } from ".."
import { Form } from "../../../_components/Form";
import { Input } from "../../../_components/Input";
import { LoginDivSty, LoginSty } from "../style"
import { MdLogin as LoginIcon} from "react-icons/md";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";


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


const loginContent : Content = {
    icon: LoginIcon,
    title: 'Login',
    component: <SignUp />,
    toText: 'sign-up',
    buttonTitle: 'Sign-in',
    to: '/auth/signup'
}


export const Login = ()=>{
    return(
        <LoginSty>
            <LoginDivSty>
                <AuthBase content={loginContent} />
            </LoginDivSty>
        </LoginSty> 
    )
}