import { useEffect, useState } from "react"
import { CurrentUserSty, UserImageSty } from "./style"
import { StateController, User } from "../../_middlewares/StateController"
import { Link, useNavigate } from "react-router-dom"
import { StringMiddleWare } from "../../_middlewares/StringMiddleware"

export const CurrentUser = ()=>{
    const [current, setCurrent] = useState<User | null>(null)
    const navigate = useNavigate()
    useEffect(()=>{
        // setCurrent(StateController.getCurrentUser())
        setCurrent(StateController.getToTest())
    },[])

    function handleClick(){
        navigate('/profile')
    }
    return (
        <CurrentUserSty onClick={handleClick}>
            {current ? 
             <>
                <span>{StringMiddleWare.NameUpperFirst(current.username)}</span>
                <UserImageSty>
                    <img src={current.imageUrl} alt={`${current.username} profile image`} />
                </UserImageSty>
             </>
             :
             <Link to={'/auth/login'}>Sign-in</Link>
            }
        </CurrentUserSty>
    )
}