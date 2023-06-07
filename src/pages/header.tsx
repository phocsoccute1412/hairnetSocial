import Image from 'next/image'
import Link from 'next/link'
import { hasCookie, getCookie } from 'cookies-next'
import homecss from '../styles/homePage.module.css'
import { useEffect, useState } from 'react'
const Picture=require('../../public/images/publicPageImages/Logo2.png')
const Ava=require('../../public/images/publicPageImages/Logo.png')

export default function Header() {
  const [href, setHref] = useState('/login')
  useEffect(()=>{
    const loginButton = document.querySelector(`#${homecss.loginHeader}`) as HTMLHeadingElement
    const linkLogin = document.querySelector('#linkLogin') as HTMLLinkElement
    if(hasCookie('account_exist')) {
      const username  = getCookie('account_exist')?.toString()
      var userNameObj
      if(username){
        userNameObj= JSON.parse(username)
      }
      loginButton.textContent= userNameObj.username
      loginButton.style.color="yellow"
      setHref('')
    }
  },[])

    return <>
    <div className={homecss.Header}>
        <div className={homecss.logo}>
          <Link href="/"><Image src={Picture} alt='picture' id={homecss.Logo}></Image></Link>
        </div>
        <div className={homecss.headermain}>
            <h2 className={homecss.Social}>Social</h2>
            <Link href='/menPage'>
              <h2 className={homecss.Men}>Men</h2>
            </Link>
            <Link href='/womanPage'>
              <h2 className={homecss.Woman}>Woman</h2>
            </Link>
            <div className={homecss.HotPart} onMouseOver={()=>{
                const dropDownHeader = document.querySelector(`.${homecss.dropdownHeader}`)
                if(dropDownHeader!==null) dropDownHeader.classList.add(homecss.dropdownHeaderActive)
              }}>
              <h2 className={homecss.Hot} onClick={()=>{
                const dropDownHeader = document.querySelector(`.${homecss.dropdownHeader}`)
                if(dropDownHeader!==null) dropDownHeader.classList.remove(homecss.dropdownHeaderActive)
              }}>Hot</h2>
            </div>
            <div className={homecss.dropdownHeader} onMouseLeave={()=>{
                const dropDownHeader = document.querySelector(`.${homecss.dropdownHeader}`)
                if(dropDownHeader!==null) dropDownHeader.classList.remove(homecss.dropdownHeaderActive)
              }}>
              <h3><Link href='/combo/mencombo'>Combo Handsome</Link></h3>
              <h3><Link href='/combo/womancombo'>Combo Prettier</Link></h3>
            </div>
        </div>
        <div className={homecss.headerright}>
          <Link id='linkLogin' href={href}>
            <h4 id={homecss.loginHeader}>Login</h4>
          </Link>
          <Image src={Ava} alt='picture' id={homecss.headerAvatar} onClick={()=>{
            const dropDownSetting = document.querySelector(`.${homecss.personalSetting}`)
            dropDownSetting?.classList.toggle(homecss.personalSettingActive)
          }}></Image>
          <div className={homecss.personalSetting}>
            <p><Link href="">Profile</Link></p>
            <p><Link href="">Setting</Link></p>
          </div>
        </div>
      </div>
    </>
}
// Header.defaultProps = {
//   Header:homecss.Header,
//   logo: homecss.logo,
//   Logo:homecss.Logo,
//   headermain:homecss.headermain,
//   Social:homecss.Social,
//   Men:homecss.Men,
//   Woman:homecss.Woman,
//   Hot:homecss.Hot,
//   headerright:homecss.headerright,
//   loginHeader:homecss.loginHeader,
//   headerAvatar:homecss.headerAvatar
// }