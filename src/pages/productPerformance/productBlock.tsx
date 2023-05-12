import Image from "next/image"
import Link from "next/link"
import star from "../../../public/images/publicPageImages/star.png"
import MenPage from "../../styles/menPage.module.css"
import React, { forwardRef, Ref } from 'react';

const ProductBlock = (props:any)=> {
    const imageUrl = `${props.url}${props.num}.jpg`
    const arrayStar = [1,2,3,4,5]

    const ranks = arrayStar.map((rank)=>{
        return (
            <Image src={star} alt='picture' className={MenPage.star} key={rank}></Image>
        )
    })

    return (
        <><Link href={`/storePage/${props.slug}`} className={MenPage.linkProduct}>
            <div className={MenPage.framePart}>
                <Image src={imageUrl} alt='picture' className={MenPage.imagePart} width={500} height={500} priority></Image>
                <div className={MenPage.blockInside}>
                    <h3 className={MenPage.titleBlock}>Title</h3>
                    <p id="nameStore">{props.hairName}</p>
                    <div className={MenPage.rankAndPrice}>
                        <div className={MenPage.stargroup}>
                            <>{ranks}</>
                        </div>
                    </div>
                    <div className={MenPage.PriceBlock}>
                        <h3 className={MenPage.Price}>Price:</h3> <p><b>100.000đ</b></p>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}
export default ProductBlock
// ProductBlock.defaultProps = {
//     framePart:'framePart',
//     imageHair:'',
//     imagePart:'imagePart',
//     blockInside:'blockInside',
//     titleBlock:'titleBlock',
//     stargroup:'stargroup',
//     star:'star'
// }