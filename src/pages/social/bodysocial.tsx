import LeftSidebar from "./leftsidebar"
import Reels from "./reels"

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
                </div>
            </div>
        </>
    )
}