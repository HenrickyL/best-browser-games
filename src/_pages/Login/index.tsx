import { LoginSty } from "./style"
import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";

export const Login = ()=>{
    return(
        <LoginSty>
            <Form.Root action="post">
                <Form.Field id="aaa">
                    <Form.Label for="email" text="Email"/>
                    <Input.Root>
                        <Input.Field>
                            <Input.Icon icon={EmailIcon} />
                            <Input.Input id="email" placeholder="Email"/>
                        </Input.Field>
                    </Input.Root>
                </Form.Field>
                <Form.FieldGroup>
                    <Form.Field id="bbb">
                        <Form.Label for="password" text="Password"/>
                        <Input.Root>
                            <Input.Password placeholder="Password"/>
                        </Input.Root>
                    </Form.Field>

                    <Form.Field id="ccc">
                        <Form.Label for="password" text="Password"/>
                        <Input.Root>
                            <Input.Password placeholder="Password"/>
                        </Input.Root>
                    </Form.Field>
                </Form.FieldGroup>
            </Form.Root>
        </LoginSty>
    )
}