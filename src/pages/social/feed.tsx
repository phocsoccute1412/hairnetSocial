import Image from "next/image"
import CommentSocial from "./commentsocial"

import socialcss from "../../styles/social.module.css"

export default function Feed(){
    return (
        <>
            <div className={socialcss.rowFeed}>
                <div className={socialcss.rowFeed__feedPart}>
                    <div className={socialcss.rowFeed__feedPart_post}>
                        <div className={socialcss.author__wrapper}>
                            <Image src={'/uploads/images_eximage2.jpg'} alt=""
                            width={500} height={500}></Image>
                            <div className={socialcss.active__green}></div>
                            <p>Hairstore1</p>
                        </div>
                        <div className={socialcss.userFeed}>
                            <p>
                                áhdkjashdkahdkajshdkjashdkjashdkjahsdjashkdhasdhaskdhkas
                                sdjkasdhasdhsakkjasdhkjasdhkasjdsakjsahdkjashdjkahsdkjhask
                                jashdkjhaskdjhaskjdhaskdhaskdjhasdakjasdkjadhsjkashdkjahdas 
                                sạhdjkahdkjashdjkashdkjasdhkjjkashdkjhaskdjaksjhdjkas
                            </p>
                        </div>
                        <div className={socialcss.emoji}>
                            <Image src={'/uploads/1682933833316_heart.png'} alt=""
                            width={500} height={500}></Image>
                            <p>12K</p>
                        </div>
                        <div className={socialcss.actionButton__wrapper}>
                            <button className={socialcss.actionButton__Like}>Like</button>
                            <button className={socialcss.actionButton__Comment}>Comment</button>
                        </div>
                        <div className={socialcss.commentPart}>
                            <div className={socialcss.commentPart__row}>
                                <Image src={'/uploads/images_eximage2.jpg'} alt=''
                                width={500} height={500}></Image>
                                <div className={socialcss.commentPart__NameAndInput}>
                                    <h4>Hairstore1</h4>
                                    <textarea name="" id="" cols={1} rows={1}></textarea>
                                </div>
                            </div>
                            <div className={socialcss.commentPart__row}>
                                <CommentSocial></CommentSocial>
                            </div>
                        </div>
                    </div>
                    <div className={socialcss.rowFeed__feedPart_media}>
                        <Image src={'/uploads/images_eximage2.jpg'} alt=""
                        width={500} height={500}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}