import AdminHeader from "./headeradmin"
import Sidebar from "./sidebarmenu"
import {useEffect, useState} from "react"
import { useRouter } from "next/router"
import { hasCookie } from "cookies-next"
import admincss from '../../styles/adminPage.module.css'

export default function SetProduct() {
    const router = useRouter()
    const [dataTypeHair, setDataTypeHair] = useState([])

    useEffect(()=>{
        if(!hasCookie("account_admin_exist")) router.push('/administrator')
        fetch('http://localhost:3000/api/fetchMaleTypeHair')
                .then((res)=>res.json())
                .then((data) =>{
                    console.log(data) 
                    setDataTypeHair(data)
                }) 
    },[])

    return (
        <>
            <Sidebar></Sidebar>
            <AdminHeader></AdminHeader>
            <div className={admincss.wrap_result}>
                {
                dataTypeHair.map((data:any)=>(
                    <>
                        <ul key={data._id}>
                            <li key={data._id}>{data.type}</li>
                        </ul>
                    </>
                ))}
            </div>
        </>
    )
}