import Header from "../header"
import Taskbar from "./taskbar"
import BodySocial from "./bodysocial"

import { useEffect } from "react"
import { hasCookie, getCookie } from "cookies-next"
import { useRouter } from "next/router"
import { useSearchParams } from "next/navigation"


export default function Social(){

    const router = useRouter()
    const routerParams = useSearchParams()
    let params:any
    if(routerParams) params = routerParams?.toString().split('=')

    useEffect(()=>{
        if(!hasCookie('account_exist')) router.push('/signup')
        else {
            const userName = getCookie('account_exist')?.toString()
            var objCookie
            if(userName){
                objCookie = JSON.parse(userName)
                if(params[1]!== objCookie.username)
                router.push(`/social/${objCookie.username}`)
            }
        }
    },[])
    return (
        <> 
            <Header></Header>
            <Taskbar></Taskbar>
            <BodySocial></BodySocial>
        </>
    )
}