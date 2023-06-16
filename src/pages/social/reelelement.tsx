import Image from "next/image"

import socialcss from "../../styles/social.module.css"

export default function ReelElement(){
    return (
        <>
            <div className={socialcss.reelPart__wrapper}>
                <Image src={'/uploads/images_face2.jpg'} alt=""
                width={500} height={500} className={socialcss.reelPart__Post}></Image>
                <div className={socialcss.avatarPart__wrapper}>
                    <Image src={'/uploads/images_face2.jpg'} alt=""
                    width={500} height={500}></Image>
                    <div className={socialcss.avatarPart__status}></div>
                </div>
            </div>
        </>
    )
}