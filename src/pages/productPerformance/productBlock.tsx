import Image from "next/image"
import star from "../../../public/images/publicPageImages/star.png"
import MenPage from "../../styles/menPage.module.css"
export default function ProductBlock(props:any) {
    const imageUrl = `${props.url}${props.num}.jpg`
    return (
        <>
            <div className={MenPage.framePart}>
                <Image src={imageUrl} alt='picture' className={MenPage.imagePart} width={500} height={500} priority></Image>
                <div className={MenPage.blockInside}>
                    <h3 className={MenPage.titleBlock}>Title</h3>
                    <p><i>Hairstore1</i></p>
                    <div className={MenPage.rankAndPrice}>
                        <div className={MenPage.stargroup}>
                            <Image src={star} alt='picture' className={MenPage.star}></Image>
                            <Image src={star} alt='picture' className={MenPage.star}></Image>
                            <Image src={star} alt='picture' className={MenPage.star}></Image>
                            <Image src={star} alt='picture' className={MenPage.star}></Image>
                            <Image src={star} alt='picture' className={MenPage.star}></Image>
                        </div>
                    </div>
                    <div className={MenPage.PriceBlock}>
                        <h3 className={MenPage.Price}>Price:</h3> <p>100.000đ</p>
                    </div>
                </div>
            </div>
        </>
    )
}
// ProductBlock.defaultProps = {
//     framePart:'framePart',
//     imageHair:'',
//     imagePart:'imagePart',
//     blockInside:'blockInside',
//     titleBlock:'titleBlock',
//     stargroup:'stargroup',
//     star:'star'
// }