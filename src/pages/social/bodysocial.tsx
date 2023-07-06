import LeftSidebar from "./leftsidebar"
import Reels from "./reels"
import Feed from "./feed"

import Image from "next/image"

import socialcss from "../../styles/social.module.css"

export default function BodySocial(){
    return (
        <>
            <div className={socialcss.bodySocial__wrapper}>
                <div className={socialcss.bodyLeft}>
                    <LeftSidebar></LeftSidebar>
                    <Image src={"/images/publicPageImages/buttonCarousel.png"}
                        alt=""
                        width={100}
                        height={100}>
                    </Image>
                </div>
                <div className={socialcss.bodyRight}>
                    <Reels></Reels>
                    <div className={socialcss.bodyRight__newFeed_wrapper}>
                        <Feed></Feed>
                        <Feed></Feed>
                    </div>
                </div>
                <div className={socialcss.messageWindow} id={socialcss.messageWindow}>
                    <div className={socialcss.messageWindow__info}
                    onClick={(e)=>{
                        const messageWindow= document.getElementById(`${socialcss.messageWindow}`) as HTMLDivElement
                        messageWindow.classList.toggle(socialcss.animationWork)
                    }}>
                        <Image src={'/uploads/tocnamdep2.jpg'} alt=""
                        width={500} height={500}></Image>
                        <p>Ngọc Long</p>
                        <div className={socialcss.messageWindow__info_active}></div>
                        <Image src={"/uploads/thugon.png"} alt=""
                        width={500} height={500} id={socialcss.thugon}></Image>
                        <Image src={"/uploads/hiddenWindow.png"} alt=""
                        width={500} height={500} id={socialcss.hiddenWindow}></Image>
                    </div>
                    <div className={socialcss.messageWindow__body}></div>
                    <div className={socialcss.messageWindow__input}>
                        <div className={socialcss.listFeature}>
                            <Image src={'/uploads/happyLife.png'} alt="Sent Icon"
                            width={500} height={500} id={socialcss.happyLife}
                            title="Sent Icon"></Image>
                        </div>
                        <textarea name="" id="" cols={1} rows={1}></textarea>
                        <Image src={'/uploads/sentMessage.png'} alt=""
                        width={500} height={500}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}