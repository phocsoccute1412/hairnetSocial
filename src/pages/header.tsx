import Image from 'next/image'
import Link from 'next/link'
import homecss from '../styles/homePage.module.css'
const Picture=require('../../public/images/publicPageImages/Logo2.png')
const Ava=require('../../public/images/publicPageImages/Logo.png')
export default function Header() {
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
            <h2 className={homecss.Hot}>Hot</h2>
        </div>
        <div className={homecss.headerright}>
          <Link href='/login'>
            <h4 id={homecss.loginHeader}>Login</h4>
          </Link>
          <Image src={Ava} alt='picture' id={homecss.headerAvatar}></Image>
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