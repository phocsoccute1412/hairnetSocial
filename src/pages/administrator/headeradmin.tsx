import Image from "next/image"
import adminheadercss from "../../styles/adminPage.module.css"
export default function AdminHeader (){
    return (
        <>
            <div className={adminheadercss.containerHeader}>
                <Image src="/images/publicPageImages/Logo2.png" alt='picture' width={500} height={500}></Image>
                <h1>LTK Group</h1>
            </div>
        </>
    )
}