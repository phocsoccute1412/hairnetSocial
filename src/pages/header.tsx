import Image from 'next/image'
import Link from 'next/link'

const Picture=require('../../public/images/publicPageImages/Logo2.png')
const Ava=require('../../public/images/publicPageImages/Logo.png')
export default function Header() {
    return <>
    <div className='Header'>
        <div className="logo">
          <Image src={Picture} alt='picture' id='Logo'></Image>
        </div>
        <div className="headermain">
            <h2 className='Social'>Social</h2>
            <h2 className='Men'>Men</h2>
            <h2 className='Woman'>Woman</h2>
            <h2 className='Hot'>Hot</h2>
        </div>
        <div className="headerright">
          <Link href='/login'>
            <h4 id='loginHeader'>Login</h4>
          </Link>
          <Image src={Ava} alt='picture' id='headerAvatar'></Image>
        </div>
      </div>
    </>
}