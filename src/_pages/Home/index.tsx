import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { MdLock  as PasswordIcon } from "react-icons/md";




export const Home = ()=>{
    return (
        <div>
            <Form.Root action="post">
                <Form.Field id="aaa">
                    <Form.Label for="email" text="Email"/>
                    <Input.Root>
                        <Input.Field>
                            <Input.Icon icon={EmailIcon} size={20}/>
                            <Input.Input id="email"/>
                        </Input.Field>
                    </Input.Root>
                </Form.Field>

                <Form.Field id="bbb">
                    <Form.Label for="password" text="Password"/>
                    <Input.Root>
                        <Input.Field>
                            <Input.Icon icon={PasswordIcon} size={20}/>
                            <Input.Input id="password" type="password"/>
                        </Input.Field>
                    </Input.Root>
                </Form.Field>
            </Form.Root>
        </div>
    )
}