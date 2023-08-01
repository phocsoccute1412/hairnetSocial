import Header from "../header"
import Footer from "../footer"
import FilterBlock from "./filterblock"
import SearchInput from "../productPerformance/search"
import DropdownButton from "../button/dropdownButton"
import SuggestButton from "../button/suggestButton"
import ProductBlock from "../productPerformance/productBlock"

import Image from "next/image"
import { useState, useEffect } from "react"

import usercss from "../../styles/userpage.module.css"

export default function userPage(){

    const [preValueSearch, setPreValueSearch]=useState('')
    const [testValueSearch, setTestValueSearch]=useState('')
    const [dataProduct, setDataProduct] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/api/fetchProduct?skipValue=0')
         .then((response)=> response.json())
         .then(data => setDataProduct(data))
    },[])

    const blocks = dataProduct.map((data:any) =>{
        const price = parseInt(data.Products.price).toLocaleString().replace(/,/g,'.')
        
        return (
            <ProductBlock key={data._id} url={data.Products.imageSrc} slug={data.name} hairName={data.name}
            typeHair={data.Products.title} ranks = {data.rank} price={price}></ProductBlock>
        )
    })

    return (
        <>
            <Header></Header>
            <div className={usercss.body__wrapper}>
                <div className={usercss.body__Top}>
                    <div className={usercss.body__Top_Left}>
                        <div className={usercss.image__wrapper}>
                            <Image src={'/uploads/tocnamdep2.jpg'} alt=""
                            width={500} height={500} priority></Image>
                        </div>
                        <div className={usercss.userName__wrapper}>
                            <p>Nguyễn Quốc Khánh</p>
                        </div>
                        <div className={usercss.editInfo}>
                            <Image src={'/uploads/caybut.png'} alt=""
                            width={500} height={500}></Image>
                        </div>
                    </div>
                    <div className={usercss.body__Top_Right}>
                        <div className={usercss.status}>
                            <ul>
                                <li>Date: 01/01/2002</li>
                                <li>Start Date: 30/06/2023</li>
                                <li>Status: <p>User</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className={usercss.optionFilter}>
                        <FilterBlock></FilterBlock>
                        <FilterBlock></FilterBlock>
                        <FilterBlock></FilterBlock>
                        <FilterBlock></FilterBlock>
                    </div>
                </div>
                <div className={usercss.optionFeed__wrapper}>
                    <p>Images</p>
                    <p>Feed</p>
                    <p>Suggest</p>
                </div>
                <div className={usercss.feedTable__wrapper}>
                    <div className={usercss.title__wrapper}>
                        <h3>Your Feed</h3>
                    </div>
                    <div className={usercss.buttonFeed}>
                        <SearchInput searchinput={usercss.searchinput} 
                            labelsearch={usercss.labelsearch} wrapsearch={usercss.wrapsearch}
                            functionTest={setTestValueSearch} 
                            activeSuggest={usercss.activeSuggest} 
                            active={usercss.active} 
                            functionFilter={setPreValueSearch}></SearchInput>
                        <div className={usercss.buttonDropDown}>
                            <DropdownButton 
                                dropdown={usercss.dropdown}
                                nut_dropdown={usercss.nut_dropdown}
                                noidung_dropdown={usercss.noidung_dropdown}
                                active={usercss.active}
                                activeSuggest={usercss.activeSuggest}>
                            </DropdownButton>
                            <SuggestButton
                                dropdownSuggestButton={usercss.dropdownSuggestButton}
                                nut_dropdownSuggest={usercss.nut_dropdownSuggest}
                                noidung_dropdownSuggest={usercss.noidung_dropdownSuggest}
                                activeSuggest={usercss.activeSuggest}
                                active={usercss.active}
                                checkArray = {true}
                                setFilter={setPreValueSearch}>
                            </SuggestButton>
                        </div>
                    </div>
                    <div className={usercss.feedTable}>
                        <div className={usercss.feedTable__row}>
                            {blocks}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}