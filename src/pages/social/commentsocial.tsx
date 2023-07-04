import Image from "next/image"

import socialcss from "../../styles/social.module.css"

export default function CommentSocial(){
    return (
        <>
            <Image src={'/uploads/images_eximage2.jpg'} alt=''
            width={500} height={500}></Image>
            <div className={socialcss.commentPart__NameAndInput}>
                <h4>Hairstore1</h4>
                <p>comment jashdkjahsdkjahsdjkhasjdjhasdkjhasjdhaksjdhkasjhdkjadhkajhdksa</p>
            </div>
        </>
    )
}