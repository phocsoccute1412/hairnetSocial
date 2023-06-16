import Image from "next/image"

import Link from "next/link"

import { useState, useEffect } from "react"

import SetMember from "./setMember"
import SetCombo from "./setCombo"
import SetPost from "./setPost"
import SetProduct from "./setProduct"
import Help from "./help"
import SetImage from "./setImage"

import businessCss from '../../styles/adminBusiness.module.css'


export default function PageAdmin(){
    const setMemberClass = {
        formSetMember:businessCss.formSetMember,
        rowForm:businessCss.rowForm,
        titleType:businessCss.titleType,
    }
    const [bodyValue, setBodyValue] = useState('')
    const [body, setBody] = useState(<SetMember props={setMemberClass}></SetMember>)

    useEffect(()=>{
        switch(bodyValue){
            case 'Set Member': 
                setBody(<SetMember props={setMemberClass}></SetMember>);
                break;
            case 'Set Product':
                setBody(<SetProduct></SetProduct>);
                break;
            case 'Set Post':
                setBody(<SetPost></SetPost>);
                break;
            case 'Set Combo':
                setBody(<SetCombo></SetCombo>);
                break;
            case 'Help':
                setBody(<Help></Help>);
                break;
            case 'Set Image':
                setBody(<SetImage></SetImage>);
                break;
        }
    },[bodyValue])
    return (
        <>
            <div className={businessCss.wrapHeader}>
                <div className={businessCss.leftHeader}>
                    <Image src='/images/publicPageImages/Logo2.png' alt='Logo'
                    width={500} height={500}></Image>
                </div>
                <div className={businessCss.midHeader}>
                    <h1>LTK Group</h1>
                </div>
                <div className={businessCss.rightHeader}>
                    <h4>Company Name</h4>
                    <Link href={''}>Log out</Link>
                    <div className={businessCss.infoUser}>
                        <Image src='/images/publicPageImages/Logo.png' alt='userImage' width={200} height={200}></Image>
                        <h5>User Name</h5>
                    </div>
                </div>
            </div>
            <div className={businessCss.wrapBody}>
                {body}
            </div>
            <footer className={businessCss.wrapFooter} onClick={(e)=>{

                    const menu = e.currentTarget

                    menu.classList.toggle(businessCss.animationWork)
                }}>
                <div className={businessCss.sidebarMenu}>
                    <h4>Action</h4>
                    <Image src="/images/publicPageImages/droptop.jpg" alt="droptop button"
                    width={100} height={100}></Image>
                </div>
                <div className={businessCss.contentSidebar}>
                    <ul>
                        <li onClick={(e)=>{
                            setBodyValue('Set Member')
                        }}>Set Member</li>
                        <li onClick={(e)=>{
                            setBodyValue('Set Product')
                        }}>Set Product</li>
                        <li onClick={(e)=>{
                            setBodyValue('Set Post')
                        }}>Set Post</li>
                        <li onClick={(e)=>{
                            setBodyValue('Set Combo')
                        }}>Set Combo</li>
                        <li onClick={(e)=>{
                            setBodyValue('Set Image')
                        }}>Set Image</li>
                        <li onClick={(e)=>{
                            setBodyValue('Help')
                        }}>Help</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}