import { SpanSty } from "./style"
import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"
import { Icon } from "../../_components/Icon";


import { 
    FaHeart as HeartIcon } from "react-icons/fa";
import { IconType } from "react-icons";
import { ReactNode } from "react";
import { Link } from "react-router-dom";



export interface Content{
    title: string,
    icon: IconType,
    component: ReactNode,
    toText: string,
    to: string,
    buttonTitle: string

}

interface BaseProp{
    content: Content
}

export const AuthBase = ({content}:BaseProp )=>{
    return(
        <>
        <Form.Root  action="post">
            <Form.Title >
                <Icon icon={content.icon}/>
                <h2>{content.title}</h2>
                <Icon icon={HeartIcon}/>
            </Form.Title>
            {content.component}
            <Input.Button type="submit" text={content.buttonTitle}/>
            <SpanSty>
                <Link to={content.to}>
                    {content.toText}
                </Link>
            </SpanSty>
        </Form.Root>
        </>
    )
}