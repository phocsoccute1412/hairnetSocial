import LeftSidebar from "./leftsidebar"
import Reels from "./reels"
import Feed from "./feed"

import Image from "next/image"
import { useState, useEffect } from "react"

import socialcss from "../../styles/social.module.css"
import homecss from "../../styles/homePage.module.css"

export default function BodySocial(){

    const [chatboxHidden, setChatBoxHidden] = useState(false)
    const [hiddenLeft, setHiddenLeft] = useState(false)
    const [srcButton, setSrcButton] = useState('/images/publicPageImages/buttonCarousel.png')


    const handleScroll = () => {
        // Get the scroll position
        const scrollPosition = window.scrollY;

        // Calculate the desired height based on the scroll position
        const desiredHeight = 100 + scrollPosition * 0.1*2;

        // Set the element's height
        const elementHeight = document.getElementById(socialcss.leftSideBar) as HTMLDivElement
        
        if(desiredHeight!=100) elementHeight.style.height=desiredHeight+"vh"
        else elementHeight.style.height="100vh"
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(()=>{
        const chatWindow = document.getElementById(`${socialcss.messageWindow}`) as HTMLDivElement
        if(!chatboxHidden){
            chatWindow.style.display="none"
        }
        else{
            chatWindow.style.display="block"
        }

        if(hiddenLeft) {
            setSrcButton("/images/publicPageImages/reverseButtionCarousel.png")
        }
        else {
            setSrcButton("/images/publicPageImages/buttonCarousel.png")
        }
    },[chatboxHidden, hiddenLeft])
    return (
        <>
            <div className={socialcss.bodySocial__wrapper}>
                <div className={socialcss.bodyLeft} id={socialcss.leftSideBar}>
                    <LeftSidebar setChat={setChatBoxHidden} chat={chatboxHidden}></LeftSidebar>
                    <Image src={srcButton}
                        alt=""
                        width={100}
                        height={100}
                        onClick={(e)=>{
                            const leftSideBar = document.getElementById(`${socialcss.leftSideBar}`) as HTMLDivElement
                            const rightBody = document.getElementById(`${socialcss.rightSideBar}`) as HTMLDivElement
                            
                            setHiddenLeft(!hiddenLeft)
                            rightBody.classList.toggle(socialcss.animationForRightBody)
                            leftSideBar.classList.toggle(socialcss.animationLeft)
                        }}>
                    </Image>
                </div>
                <div className={socialcss.bodyRight} id={socialcss.rightSideBar}>
                    <Reels></Reels>
                    <div className={socialcss.bodyRight__newFeed_wrapper}>
                        <Feed></Feed>
                        <Feed></Feed>
                        <Feed></Feed>
                        <Feed></Feed>
                        <Feed></Feed>
                    </div>
                </div>
                <div className={socialcss.messageWindow} id={socialcss.messageWindow} hidden={chatboxHidden}>
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
                        width={500} height={500} id={socialcss.hiddenWindow}
                        onClick={(e)=>{
                            setChatBoxHidden(false)
                        }}></Image>
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