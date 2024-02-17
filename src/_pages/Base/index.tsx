import { Outlet } from "react-router-dom"
import { SideBar } from "../../_components/SideBar"
import { services } from "../../_middlewares/SideBarServices"
import { BaseDivSty, BaseSty } from "./style"
import { Header } from "../../_components/Header"


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
            <BaseDivSty>
                <Header.Root>
                    <Header.Field />
                    <h1>Logo</h1>
                    <Header.Field />
                </Header.Root>
                <main>
                    <Outlet />
                </main>
            </BaseDivSty>
        </BaseSty>
    )
}