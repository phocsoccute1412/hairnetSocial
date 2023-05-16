import Header from "../header"
import Footer from "../footer"
import style from "../../styles/menPage.module.css"
import ProductBlock from "../productPerformance/productBlock"
import React, { useState, useEffect, useRef } from "react"
import Head from "next/head"
import DropdownButton from "../button/dropdownButton"
import SuggestButton from "../button/suggestButton"
import SearchInput from "../productPerformance/search"
import { useRouter } from "next/router"
import { hasCookie } from "cookies-next"

export default function MenPage() {
    const router = useRouter()
    const [dataRes, setDataRes] = useState([])
    const refProduct = useRef(null)

    useEffect(()=>{
        if(!hasCookie('account_exist')) router.push('/')
        fetch('http://localhost:3000/api/fetchInfoProduct')
        .then((response)=> response.json())
        .then((data)=> setDataRes(data))
    },[])

    const urlMan = '/images/publicPageImages/tocnamdep'
    const [page,setPage]=useState(2)

    if(page > 13) setPage(2)
    if(page < 2) setPage(13)

    const arrayType:Array<any> = []
    const blocks = dataRes.map((data:any) =>{
        arrayType.push(data.listStore.type)
        arrayType.push(data.name)
        return (
            <ProductBlock key={data._id} num={page} url={urlMan} slug={data.name} hairName={data.name}
            typeHair={data.listStore.type} ranks = {data.rank}></ProductBlock>
        )
    })
    console.log(arrayType)
    return (
        <>
            <Head>
                <title>hairnetSocial</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <h1 className={style.titleMenPage}>Men Page</h1>
            <div className={style.frame}>
            <SearchInput searchinput={style.searchinput} labelsearch={style.labelsearch} wrapsearch={style.wrapsearch}
            productShopName={arrayType}></SearchInput>
            <div className={style.buttonDropDown}>
                <DropdownButton 
                dropdown={style.dropdown}
                nut_dropdown={style.nut_dropdown}
                noidung_dropdown={style.noidung_dropdown}
                active={style.active}
                activeSuggest={style.activeSuggest}>
                </DropdownButton>
                <SuggestButton
                dropdownSuggestButton={style.dropdownSuggestButton}
                nut_dropdownSuggest={style.nut_dropdownSuggest}
                noidung_dropdownSuggest={style.noidung_dropdownSuggest}
                activeSuggest={style.activeSuggest}
                active={style.active}
                checkArray = {true}>
                </SuggestButton>
            </div>
                {/* row 1 */}
                <div className={style.rowEach} id={style.rowEachFirst}>
                    <>{blocks}</>
                </div>
                {/* hết row 1 */}
                {/* row 2 */}
                <div className={style.rowEach}>
                    <>{blocks}</>
                </div>
                {/* hết row 2 */}
                {/* row 3 */}
                <div className={style.rowEach}>
                    <>{blocks}</>
                </div>
                {/* hết row 3 */}
                <div className={style.changeParent}>
                <h3 onClick={()=> setPage(2)}>1</h3>
                <h3 onClick={()=> setPage(3)}>2</h3>
                <h3>...</h3>
                <h3 onClick={()=>{
                    setPage(page+1)
                }}><button>Next</button></h3>
                <h3 onClick={()=>{
                    setPage(page-1)
                }}><button>Previous</button></h3>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}