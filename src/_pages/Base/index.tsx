import { Outlet } from "react-router-dom"
import { SideBar } from "../../_components/SideBar"
import { services } from "../../_middlewares/SideBarServices"
import { BaseSty } from "./style"


export const Base = ()=>{
    return (
        <BaseSty>
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
            <main>
                <Outlet />
            </main>
        </BaseSty>
    )
}