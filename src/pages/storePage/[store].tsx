import Header from "@/pages/header"
import Footer from "@/pages/footer"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import storepagecss from '../../styles/storepage.module.css'
import Search from '../productPerformance/search'
import ProductBlock from "../productPerformance/productBlock"
export default function PageStore(){
    const param = useSearchParams()
    const store = param.toString().split('=')
    const [messArr, setMessArr]= useState([])
    const urlWoman = "/images/publicPageImages/tocnu"
    const [page,setPage]=useState(5)
    if(page > 13) setPage(5)
    if(page < 5) setPage(13)
    const keys = [1,2,3,4,1000]
    const blocks = keys.map(key =>{
        return (
            <ProductBlock key={key} num={page} url={urlWoman} slug={key} hairName='hairstore1'></ProductBlock>
        )
    })
    const callBackFunc = (child:never) => setMessArr([child])
    useEffect(()=>{
        console.log(messArr)
    },[messArr])
    return(
        <>
            <Header></Header>
            <div className={storepagecss.container_storeinfo}>
                <div className={storepagecss.imgandinfo}>
                    <Image src='/images/publicPageImages/tocnu6.jpg' alt="picture" width={335} height={387}></Image>
                    <div className={storepagecss.infostore}>
                        <h4>Company Name</h4>
                        <div className={storepagecss.detail}>
                            <ul>
                                <li>
                                    Gmail:
                                </li>
                                <li>
                                    Phone:
                                </li>
                                <li>
                                    Address:
                                </li>
                            </ul>
                            <ul>
                                <li>hairstore1@gmail.com</li>
                                <li>0984521214</li>
                                <li>Ho Chi Minh City</li>
                            </ul>
                        </div>
                    </div>
                    <div className={storepagecss.aboutcompany}>
                        <h1>About us</h1>
                        <p>
                        {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                        </p>
                        <button className={storepagecss.contactbutton}>{'Contact'}</button>
                        <button className={storepagecss.likebutton}>{'Like'}</button>
                    </div>
                    <div className={storepagecss.carouselcompany}>
                        <input type="radio" className={storepagecss.carousel_indicator} id={storepagecss.carousel_input_1} name='carousel_img' 
                        defaultChecked/>
                        <Image src="/images/publicPageImages/post1.jpg" alt='carousel'
                        width={1000} height={100} id={storepagecss.carousel_img_1} className={storepagecss.carousel_img}></Image>
                        <input type="radio" className={storepagecss.carousel_indicator} id={storepagecss.carousel_input_2} name='carousel_img' />
                        <Image src="/images/publicPageImages/Logo4.jpg" alt='carousel'
                        width={1000} height={100} id={storepagecss.carousel_img_2} className={storepagecss.carousel_img}></Image>
                        <input type="radio" className={storepagecss.carousel_indicator} id={storepagecss.carousel_input_3} name='carousel_img' />
                        <Image src="/images/publicPageImages/logo5.png" alt='carousel'
                        width={1000} height={100} id={storepagecss.carousel_img_3} className={storepagecss.carousel_img}></Image>
                        <button className={storepagecss.buttonCarouselRight} onClick={handleOnClick}><Image src='/images/publicPageImages/buttonCarousel.png'
                            alt="picture" width={500} height={500} className={storepagecss.imgCarouselButtonLeft}
                        ></Image></button>
                        <button className={storepagecss.buttonCarouselLeft} onClick={handleOnClickReverse}><Image src='/images/publicPageImages/reverseButtionCarousel.png'
                            alt="picture" width={500} height={500} className={storepagecss.imgCarouselButtonRight}
                        ></Image></button>
                    </div>
                </div>
            </div>
            <div className={storepagecss.titleProduct}>
                <h2>{'Product'}</h2>
            </div>
            <div className={storepagecss.bodyProduct}>
                <div className={storepagecss.rowTitle}>
                    <button className={storepagecss.styleHairButton} id={storepagecss.styleHair}>
                        <h4>{'Kiểu tóc'}</h4>
                        <Image src="/images/publicPageImages/dropdown.png" alt='picture'
                        width={200} height={200}></Image>
                    </button>
                    <button className={storepagecss.styleHairButton} id={storepagecss.colorHair}>
                        <h4>{'Màu tóc'}</h4>
                        <Image src="/images/publicPageImages/dropdown.png" alt='picture'
                        width={200} height={200}></Image>
                    </button>
                    <button className={storepagecss.styleHairButton} id={storepagecss.lengthHair}>
                        <h4>{'Độ dài'}</h4>
                        <Image src="/images/publicPageImages/dropdown.png" alt='picture'
                        width={200} height={200}></Image>
                    </button>
                    {/* <Search wrapsearch={storepagecss.wrapsearch}
                    searchinput={storepagecss.searchinput}
                    labelsearch={storepagecss.labelsearch}
                    parentCallBack={callBackFunc}></Search> */}
                </div>
                <div className={storepagecss.rowbody}>
                    {blocks}
                </div>
                {/* hết rowbody 1 */}
                <div className={storepagecss.rowbody}>
                    {blocks}
                </div>
                {/* hết rowbody 2 */}
                <div className={storepagecss.rowbody}>
                    {blocks}
                </div>
                {/* hết rowbody 3 */}
                <div className={storepagecss.rowbody}>
                    {blocks}
                </div>
                {/* hết rowbody 4 */}
                <div className={storepagecss.changeParent}>
                    <h3 onClick={()=> setPage(5)}>1</h3>
                    <h3 onClick={()=> setPage(6)}>2</h3>
                    <h3>...</h3>
                    <h3 onClick={()=>{
                        setPage(page+1)
                    }}><button>Next</button></h3>
                    <h3 onClick={()=>{
                        setPage(page-1)
                    }}><button>Previous</button></h3>
                </div>
            </div>
            <div className={storepagecss.reviewPart}>
                <h3>Review</h3>
                <div className={storepagecss.commenteach}>
                    <Image src='/images/publicPageImages/tocnamdep3.jpg' alt='picture'
                    width={500} height={500}></Image>
                    <h6>Hairstore1</h6>
                    <p>Hello Everybody!</p>
                </div>
                <div className={storepagecss.commenteach}>
                    <Image src='/images/publicPageImages/tocnamdep3.jpg' alt='picture'
                    width={500} height={500}></Image>
                    <h6>Hairstore1</h6>
                    <p>Hello Everybody!</p>
                </div>
                <div className={storepagecss.commenteach}>
                    <Image src='/images/publicPageImages/tocnamdep3.jpg' alt='picture'
                    width={500} height={500}></Image>
                    <h6>Hairstore1</h6>
                    <p>Hello Everybody!</p>
                </div>
                <div className={storepagecss.commenteach}>
                    <Image src='/images/publicPageImages/tocnamdep3.jpg' alt='picture'
                    width={500} height={500}></Image>
                    <h6>Hairstore1</h6>
                    <p>Hello Everybody!</p>
                </div>
                <div className={storepagecss.commenteach}>
                    <Image src='/images/publicPageImages/tocnamdep3.jpg' alt='picture'
                    width={500} height={500}></Image>
                    <h6>Hairstore1</h6>
                    <p>Hello Everybody!</p>
                </div>
                <div className={storepagecss.commenteach}>
                    <Image src='/images/publicPageImages/tocnamdep3.jpg' alt='picture'
                    width={500} height={500}></Image>
                    <h6>Hairstore1</h6>
                    <p>Hello Everybody!</p>
                </div>
                <div className={storepagecss.commenteach}>
                    <Image src='/images/publicPageImages/tocnamdep3.jpg' alt='picture'
                    width={500} height={500}></Image>
                    <h6>Hairstore1</h6>
                    <p>Hello Everybody!</p>
                </div>
                <div className={storepagecss.commenteach}>
                    <Image src='/images/publicPageImages/tocnamdep3.jpg' alt='picture'
                    width={500} height={500}></Image>
                    <h6>Hairstore1</h6>
                    <p>Hello Everybody!</p>
                </div>
                <div className={storepagecss.comment}>
                    <Image src="/images/publicPageImages/tocnamdep4.jpg" alt='picture'
                    width={500} height={500}></Image>
                    <h6>Hairstore2</h6>
                    <input type="text" placeholder="Type something..."/>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
function handleOnClick(){
    const inputEles = document.querySelectorAll(`.${storepagecss.carousel_indicator}`) as NodeListOf<HTMLInputElement>
    console.log(inputEles)
    let flag = 0;
    for(let i=0; i<inputEles.length; i++){
        if(inputEles[i].checked){
            flag = i;
        }
    }
    if(flag === 2) flag = 0;
    else flag +=1;
    inputEles[flag].checked=true;
}
function handleOnClickReverse(){
    const inputElesReverse = document.querySelectorAll(`.${storepagecss.carousel_indicator}`) as NodeListOf<HTMLInputElement>
    let flag = 0;
    for(let i=0; i<inputElesReverse.length; i++){
        if(inputElesReverse[i].checked){
            flag = i;
        }
    }
    if(flag === 0) flag = 2;
    else flag -=1;
    inputElesReverse[flag].checked=true;
}