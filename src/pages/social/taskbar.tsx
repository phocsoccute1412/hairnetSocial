import Image from "next/image"
import Link from "next/link"

import socialcss from "../../styles/social.module.css"

export default function Taskbar(){
    return (
        <>
            <div className={socialcss.taskbar__wrapper}>
                <div className={socialcss.leftButton}>
                    <Link href={'/signUpFormBusiness/signUpFormBusiness'}>Sign up Business</Link>
                </div>
                <div className={socialcss.rightButton}>
                    <div className={socialcss.pushBlock}></div>
                    <div className={socialcss.block__Image}>
                        <Image src='/images/publicPageImages/hopthu.png' 
                            width={100} 
                            height={100} 
                            alt="" 
                            id={socialcss.messID}>
                        </Image>
                    </div>
                    <div className={socialcss.block__Image}>
                        <Image src='/images/publicPageImages/thongbao.png' 
                            width={100} 
                            height={100} 
                            alt="" 
                            id={socialcss.notificationID}>
                        </Image>
                    </div>
                </div>
            </div>
        </>
    )
}