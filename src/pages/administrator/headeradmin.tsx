import Image from "next/image"
import adminheadercss from "../../styles/adminPage.module.css"
export default function AdminHeader (){
    return (
        <>
            <div className={adminheadercss.containerHeader}>
                <h1>LTK Group</h1>
            </div>
        </>
    )
}