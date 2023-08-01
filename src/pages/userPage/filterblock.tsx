import Image from "next/image"

import usercss from "../../styles/userpage.module.css"

export default function FilterBlock(){
    return (
        <>
            <div className={usercss.filterBlock__wrapper}>
                <Image src={'/uploads/tocnamdep2.jpg'} alt=""
                width={500} height={500}></Image>
                <div className={usercss.filterBlock__filterTag_wrapper}>
                    <p>Kiểu tóc</p>
                    <Image src={'/images/publicPageImages/dropdown.png'} alt=""
                    width={500} height={500}></Image>
                </div>
                <div className={usercss.dropdownTable__HairType} style={{display:'none'}}>
                    <ul>
                        <li>Buzz Cut</li>
                    </ul>
                </div>
            </div>
        </>
    )
}