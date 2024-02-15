import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";


export const Home = ()=>{
    return (
        <div>
            <Form.Root action="post">
                <Form.FieldGroup id="aaa">
                    <Form.Label for="email" text="Email"/>
                    <Input.Root>
                        <Input.Field>
                            <Input.Icon icon={EmailIcon} size={20}/>
                            <Input.Input id="email" placeholder="Email"/>
                        </Input.Field>
                    </Input.Root>
                </Form.FieldGroup>

                <Form.Field id="bbb">
                    <Form.Label for="password" text="Password"/>
                    <Input.Root>
                        <Input.Password placeholder="Password"/>
                    </Input.Root>
                </Form.Field>
            </Form.Root>
        </div>
    )
}