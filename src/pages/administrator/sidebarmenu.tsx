import sidebarcss from '../../styles/sidebar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar(){
    return (
        <>
            <div className={sidebarcss.container_sidebar_menu}>
                <Image src="/images/publicPageImages/Logo2.png" alt='picture' width={500} height={500}></Image>
                <Link href='/administrator/setshop'>
                    <div className={sidebarcss.setRank}>
                        <h3>Set Shop</h3>
                    </div>
                </Link>
                <Link href='/administrator/setpost'>
                    <div className={sidebarcss.setRank}>
                        <h3>Set Post</h3>
                    </div>
                </Link>
                <Link href='/administrator/setproduct'>
                    <div className={sidebarcss.setRank}>
                        <h3>Set Product</h3>
                    </div>
                </Link>
                <Link href='/administrator/setcombo'>
                    <div className={sidebarcss.setRank}>
                        <h3>Set Combo</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}