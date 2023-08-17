import Image from "next/image"
import { useState, useEffect } from "react"

import CommentSocial from "./commentsocial"

import socialcss from "../../styles/social.module.css"

export default function Feed({props}:any){

    var like
    if(props.react.like >= 1000) like = props.react.like/1000 + "K"
    else like =props.react.like

    const {comment} = props
    const commentUsers = comment.map((data:any) =>{
        return (
            <>
                <div className={`${socialcss.commentPart__row} ${socialcss.n_child}`}>
                    <CommentSocial props={data}></CommentSocial>
                </div>
            </>
        )
    })

    return (
        <>
            <div className={socialcss.rowFeed}>
                <div className={socialcss.rowFeed__feedPart}>
                <div className={socialcss.rowFeed__feedPart_media}>
                        <Image src={'/uploads/images_eximage2.jpg'} alt=""
                        width={500} height={500}></Image>
                </div>
                    <div className={socialcss.rowFeed__feedPart_post}>
                        <div className={socialcss.author__wrapper}>
                            <Image src={props.host.avaSrc} alt=""
                            width={500} height={500}></Image>
                            <div className={socialcss.active__green}></div>
                            <p>{props.host.name}</p>
                        </div>
                        <div className={socialcss.userFeed}>
                            <p>
                                {props.post}
                            </p>
                        </div>
                        <div className={socialcss.emoji}>
                            <Image src={'/uploads/1682933833316_heart.png'} alt=""
                            width={500} height={500}></Image>
                            <p>{like}</p>
                        </div>
                        <div className={socialcss.actionButton__wrapper}>
                            <button className={socialcss.actionButton__Like}>Like</button>
                            <button className={socialcss.actionButton__Comment}>{`Comment (20)`}</button>
                            <button className={socialcss.actionButton__Share}>Share</button>
                        </div>
                        <div className={socialcss.commentPart}>
                            <div className={socialcss.commentPart__row}>
                                <Image src={props.host.avaSrc} alt=''
                                width={500} height={500}></Image>
                                <div className={socialcss.commentPart__NameAndInput}>
                                    <h4>{props.host.name}</h4>
                                    <textarea name="" id="" cols={1} rows={1}></textarea>
                                </div>
                            </div>
                            <>{commentUsers}</>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}