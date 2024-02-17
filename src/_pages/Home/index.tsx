import { SideBar } from "../../_components/SideBar"
import { services } from "../../_middlewares/SideBarServices"






export const Home = ()=>{
    return (
        <div>
            <SideBar.Root >
                <SideBar.Field>
                    {services.main.map(item=>
                        <SideBar.Item icon={item.icon} text={item.text} to={item.to} />
                        )}
                </SideBar.Field>

                <SideBar.Field>
                    {services.another.map(item=>
                        <SideBar.Item icon={item.icon} text={item.text} to={item.to} />
                        )}
                </SideBar.Field>
            </SideBar.Root>
        </div>
    )
}