
import Image from "next/image"

import socialcss from "../../styles/social.module.css"
export default function LeftSidebar(){
    return (
        <>
            <div className={socialcss.leftSidebar__borderTop}>
                <Image src="/uploads/tocnamdep2.jpg"
                    alt=""
                    width={100}
                    height={100}>
                </Image>
                <div className={socialcss.leftSidebar__borderTop_blockInfo}>
                    <h2></h2>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    )
}