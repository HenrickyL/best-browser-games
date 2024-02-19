import { LoginDivSty, LoginSty } from "./style"
import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { Icon } from "../../_components/Icon";

import { MdLogin as LoginIcon} from "react-icons/md";

import { FaHeart as HeartIcon } from "react-icons/fa";


export const Authentication = ()=>{
    return(
        <LoginSty>
            <LoginDivSty>
                    <Form.Root  action="post">
                        <Form.Title >
                            <Icon icon={LoginIcon}/>
                            <h2>Login</h2>
                            <Icon icon={HeartIcon}/>
                        </Form.Title>
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

                        <Input.Button type="submit" text="Sign-in"/>
                    </Form.Root>
            </LoginDivSty>
        </LoginSty>
    )
}