import Image from "next/image"

import socialcss from "../../styles/social.module.css"

export default function CommentSocial({props}:any){
    return (
        <>
            <Image src={props.ava} alt=''
            width={500} height={500}></Image>
            <div className={socialcss.commentPart__NameAndInput}>
                <h4>{props.host}</h4>
                <p>{props.post}</p>
            </div>
        </>
    )
}