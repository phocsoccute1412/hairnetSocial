import { hasCookie} from "cookies-next"
import AdminPage from "./setshop"
import LoginAdmin from "./loginadmin"
import {useState, useEffect} from 'react'
export default function HomeAdmin(){
    const [state, setState]=useState(<LoginAdmin/>)
    useEffect(() =>{
        if(hasCookie('account_admin_exist')){
            setState(<AdminPage/>)
        }
    },[])
    return (state)
}
