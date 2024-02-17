import { SideBar } from "../../_components/SideBar"
import {
    IoHome as HomeIcon,
    IoPerson as ProfileIcon
} from 'react-icons/io5'



const items = [
    {
        text: 'Home',
        icon:  HomeIcon,
        to: '/'
    },
    {
        text: 'Profile',
        icon:  ProfileIcon,
        to: '/2'
    }
]

export const Home = ()=>{
    return (
        <div>
            <SideBar.Root >
                {items.map(item=>
                    <SideBar.Item icon={item.icon} text={item.text} to={item.to} />
                    )}
            </SideBar.Root>
        </div>
    )
}