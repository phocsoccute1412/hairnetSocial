import Image from "next/image"

import socialcss from "../../styles/social.module.css"

export default function ListOfActiveUser(props:any){
    return (
        <>
            <div className={socialcss.activeListRow} onClick={(e)=>{
                    const messageWindow= document.getElementById(`${socialcss.messageWindow}`) as HTMLDivElement
                    props.setChat(true)
                    if(!props.chat) messageWindow.classList.remove(socialcss.animationWork)
                }}>
                <Image src={'/uploads/tocnamdep2.jpg'} alt=""
                width={500} height={500}></Image>
                <p>User Name</p>
                <div className={socialcss.activeList__circle}></div>
            </div>
        </>
    )
}