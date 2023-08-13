import ListOfActiveUser from "./activeuserlist"

import Image from "next/image"
import {useEffect, useState} from "react"

import socialcss from "../../styles/social.module.css"
export default function LeftSidebar(props:any){

    const [friendListObj, setFriendListObj] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/api/fetchFriendList')
         .then(response => response.json())
         .then(data=>setFriendListObj(()=>data))
    },[])
    const names=friendListObj.map((data:any)=>data.friends.map((data:any)=><ListOfActiveUser setChat={props.setChat} chat={props.chat} names={data.name}></ListOfActiveUser>))

    return (
        <>
            <div className={socialcss.leftSidebar__borderTop} id={socialcss.bodyLeft}>
                <Image src="/uploads/tocnamdep2.jpg"
                    alt=""
                    width={100}
                    height={100}>
                </Image>
                <div className={socialcss.leftSidebar__borderTop_blockInfo}>
                    <h2>nguyễn quốc khánh</h2>
                    <ul>
                        <li>Status: <p> Active</p></li>
                        <li>Level: <p> User</p></li>
                    </ul>
                </div>
                <div className={socialcss.leftSidebar__Options}>
                    <div className={socialcss.leftSidebar__Options_LikedPages}>
                        <Image src={'/uploads/pageFlag.png'} alt=""
                        width={500} height={500}></Image>
                        <p>Followed Pages</p>
                    </div>
                    <div className={socialcss.leftSidebar__Options_ProductStored}>
                        <Image src={'/uploads/saveIcon.png'} alt=""
                        width={500} height={500}></Image>
                        <p>Stored Products</p>
                    </div>
                </div>
                <div className={socialcss.activeList__wrapper}>
                    <>{names}</>
                </div>
            </div>
        </>
    )
}