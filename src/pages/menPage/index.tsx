import Header from "../header"
import Footer from "../footer"
import style from "../../styles/menPage.module.css"
import ProductBlock from "../productPerformance/productBlock"
import React, { useEffect, useRef, useState } from "react"
import Head from "next/head"

export default function MenPage() {
    const [page,setPage]=useState(2)
    if(page > 13) setPage(2)
    if(page < 2) setPage(13)
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
                {/* row 1 */}
                <div className={style.rowEach}>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                </div>
                {/* hết row 1 */}
                {/* row 2 */}
                <div className={style.rowEach}>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                </div>
                {/* hết row 2 */}
                {/* row 3 */}
                <div className={style.rowEach}>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
                    <ProductBlock num={page}></ProductBlock>
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