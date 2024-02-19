import { AuthBase, Content } from ".."
import { Form } from "../../../_components/Form";
import { Input } from "../../../_components/Input";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import {FaUser as UserIcon } from "react-icons/fa";
import { BiWorld, BiMap, BiCalendar as BirthIcon } from 'react-icons/bi';
import { SignUpDivSty, SignUpSty } from "./style";


const SignUpContent = ()=>{
    return(
        <>
        <Form.Field >
            <Input.Root>
                <Input.Field>
                    <Input.Icon icon={UserIcon} />
                    <Input.Input id="fullname" placeholder="Full Name"/>
                </Input.Field>
            </Input.Root>
        </Form.Field>

        <Form.Field >
            <Input.Root>
                <Input.Field>
                    <Input.Icon icon={BirthIcon} />
                    <Input.Input type="date" id="birthdate" placeholder="Date of Birth"/>
                </Input.Field>
            </Input.Root>
        </Form.Field>

        <Form.Field >
            <Input.Root>
                <Input.Field>
                    <Input.Icon icon={EmailIcon} />
                    <Input.Input id="email" placeholder="Email"/>
                </Input.Field>
            </Input.Root>
        </Form.Field>

        <Form.Field >
                <Input.Root>
                    <Input.Password placeholder="Password"/>
                </Input.Root>
        </Form.Field>

        <Form.FieldGroup>
            <Form.Field>
                <Input.Root>
                    <Input.Field>
                    <Input.Icon icon={BiWorld} /> 
                    <Input.Input id="country" placeholder="Country" />
                    </Input.Field>
                </Input.Root>
            </Form.Field>
            <Form.Field>
                <Input.Root>
                    <Input.Field>
                    <Input.Icon icon={BiMap} /> 
                    <Input.Input id="state" placeholder="State" />
                    </Input.Field>
                </Input.Root>
            </Form.Field>
        </Form.FieldGroup>


        </>
    )
}

const signUpContent : Content = {
    icon: UserIcon,
    title: 'Sign Up',
    component: <SignUpContent />,
    toText: 'login',
    buttonTitle: 'Sign-up',
    to: '/auth/login'
}


export const SignUp = ()=>{
    return(
        <SignUpSty>
            <SignUpDivSty>
                <AuthBase content={signUpContent} />
            </SignUpDivSty>
        </SignUpSty> 
    )
}