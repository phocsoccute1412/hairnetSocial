import Header from "../header"
import Footer from "../footer"
import style from "../../styles/menPage.module.css"
import ProductBlock from "../productPerformance/productBlock"
import React, { useEffect, useRef, useState } from "react"
import Head from "next/head"
import DropdownButton from "../button/dropdownButton"
import SuggestButton from "../button/suggestButton"
import SearchInput from "../productPerformance/search"

export default function MenPage() {
    const urlWoman = "/images/publicPageImages/tocnu"
    const [page,setPage]=useState(5)
    if(page > 13) setPage(5)
    if(page < 5) setPage(13)
    const keys = [1,2,3,4,1000]
    const blocks = keys.map(key =>{
        return (
            <ProductBlock key={key} num={page} url={urlWoman} slug={key}></ProductBlock>
        )
    })
    const [arr,setArr]=useState([])
    const callBackFunction = (child:never) =>setArr([child])
    console.log(arr)
    return (
        <>
            <Head>
                <title>hairnetSocial</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <h1 className={style.titleMenPage}>Woman Page</h1>
            <div className={style.frame}>
            <SearchInput searchinput={style.searchinput} labelsearch={style.labelsearch} wrapsearch={style.wrapsearch}
            parentCallBack={callBackFunction}></SearchInput>
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
                checkArray={false}>
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
            <Footer></Footer>
        </>
    )
}