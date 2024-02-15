import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"

export const Home = ()=>{
    return (
        <div>
            <Form.Root action="post">
                <Form.Field>
                    <Input.Root>
                        <Input.Field>
                            <Input.Icon />
                            <Input.Input />
                        </Input.Field>
                    </Input.Root>
                </Form.Field>
            </Form.Root>
        </div>
    )
}