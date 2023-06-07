import Header from "../header"
import Footer from "../footer"
import style from "../../styles/menPage.module.css"
import ProductBlock from "../productPerformance/productBlock"
import React, { useEffect, useState } from "react"
import Head from "next/head"
import DropdownButton from "../button/dropdownButton"
import SuggestButton from "../button/suggestButton"
import SearchInput from "../productPerformance/search"
import { useRouter } from "next/router"
import { hasCookie } from "cookies-next"

export default function MenPage() {
    const router = useRouter()
    const [page,setPage]=useState(0)
    const [dataRes, setDataRes] = useState([])
    const [dataResRow2, setDataResRow2] = useState([])
    const [dataResRow3, setDataResRow3] = useState([])
    const [testValueSearch, setTestValueSearch]=useState('')
    const [preValueSearch, setPreValueSearch]=useState('')

    useEffect(()=>{
        if(!hasCookie('account_exist')) router.push('/') 
    },[])

    useEffect(() =>{
        setDataRes([])
        setDataResRow2([])
        setDataResRow3([])

        if(testValueSearch && !preValueSearch){
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page}&filterSearch=${testValueSearch}`)
            .then((response)=> response.json())
            .then((data)=> setDataRes(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+5}&filterSearch=${testValueSearch}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow2(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+10}&filterSearch=${testValueSearch}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow3(data))}
    
            else if(!testValueSearch && !preValueSearch){
                fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page}`)
            .then((response)=> response.json())
            .then((data)=> setDataRes(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+5}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow2(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+10}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow3(data))
            }
    
            else if(!testValueSearch&&preValueSearch){
                fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page}&filterSearch=${preValueSearch}`)
            .then((response)=> response.json())
            .then((data)=> setDataRes(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+5}&filterSearch=${preValueSearch}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow2(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+10}&filterSearch=${preValueSearch}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow3(data))}
            else if(testValueSearch===''&&preValueSearch){
                fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page}`)
            .then((response)=> response.json())
            .then((data)=> setDataRes(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+5}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow2(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+10}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow3(data))
            }
            else{
                fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page}&filterSearch=${testValueSearch}`)
            .then((response)=> response.json())
            .then((data)=> setDataRes(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+5}&filterSearch=${testValueSearch}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow2(data))
    
            fetch(`http://localhost:3000/api/fetchProduct?skipValue=${page+10}&filterSearch=${testValueSearch}`)
            .then((response)=> response.json())
            .then((data)=> setDataResRow3(data))
            }
    
    },[testValueSearch||preValueSearch||page])

    if(page < 0) setPage(0)

    const blocks = dataRes.map((data:any) =>{
        const price = parseInt(data.Products.price).toLocaleString().replace(/,/g,'.')

        return (
            <ProductBlock key={data._id} url={data.Products.imageSrc} slug={data.name} hairName={data.name}
            typeHair={data.Products.title} ranks={data.rank} price={price}></ProductBlock>
        )
    })

    const block_row_2 = dataResRow2.map((data:any) =>{
        const price = parseInt(data.Products.price).toLocaleString().replace(/,/g,'.')

        return (
            <ProductBlock key={data._id} url={data.Products.imageSrc} slug={data.name} hairName={data.name}
            typeHair={data.Products.title} ranks = {data.rank} price={price}></ProductBlock>
        )
    })

    const block_row_3 = dataResRow3.map((data:any) =>{
        const price = parseInt(data.Products.price).toLocaleString().replace(/,/g,'.')

        return (
            <ProductBlock key={data._id} url={data.Products.imageSrc} slug={data.name} hairName={data.name}
            typeHair={data.Products.title} ranks = {data.rank} price={price}></ProductBlock>
        )
    })

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
             functionTest={setTestValueSearch} activeSuggest={style.activeSuggest} active={style.active}
             functionFilter={()=>{}}></SearchInput>
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
                checkArray={false}
                setFilter={()=>{}}>
                </SuggestButton>
            </div>
                {/* row 1 */}
                <div className={style.rowEach} id={style.rowEachFirst}>
                    <>{blocks}</>
                </div>
                {/* hết row 1 */}
                {/* row 2 */}
                <div className={style.rowEach}>
                    <>{block_row_2}</>
                </div>
                {/* hết row 2 */}
                {/* row 3 */}
                <div className={style.rowEach}>
                    <>{block_row_3}</>
                </div>
                {/* hết row 3 */}
                <div className={style.changeParent}>
                    <h3 onClick={()=> setPage(0)}>1</h3>
                    <h3 onClick={()=> setPage(page+15)}>2</h3>
                    <h3>...</h3>
                    <h3 onClick={()=>{
                        setPage(page+15)
                    }}><button>Next</button></h3>
                    <h3 onClick={()=>{
                        setPage(page-15)
                    }}><button>Previous</button></h3>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}