import { useState } from "react"
import Image from "next/image"
export default function DropdownButton(props:any){
    const [arrangePrice,setArrangePrice]=useState(false)
    const [exchange, setExchange]=useState(false)

    var insOrDes = ''
    var arrangePriceVariable = ''

    if(exchange) {insOrDes = 'Increase';props.setArrangeOptions(()=>'Rank Increase')}
    else {insOrDes = 'Decrease';props.setArrangeOptions(()=>'Rank Decrease')}

    if(arrangePrice) {arrangePriceVariable='Increase';props.setControlPrice(()=>'Price Increase')}
    else {arrangePriceVariable='Decrease';props.setControlPrice(()=>'Price Decrease')}
    return (
        <>
            <div className={props.dropdown}>
                <Image src="/images/publicPageImages/exchange.png" alt="picture"
                width={500} height={500}
                style={{width:"30px",height:"30px",borderRadius:"5px"}}
                className={props.nut_dropdown} onClick={()=>{
                    const eles:any = document.querySelector('#target')
                    const elesSuggest:any = document.querySelector('#Suggest')
                    if(elesSuggest != null){
                        if(elesSuggest.classList.contains(props.activeSuggest)) elesSuggest.classList.remove(props.activeSuggest)
                    }
                    if(eles!= null) eles.classList.toggle(props.active)
                }}></Image>
                <div id= 'target' className={props.noidung_dropdown} onMouseLeave={()=>{
                    const elesDropDown:any = document.querySelector('#target')
                    elesDropDown.classList.remove(props.active)
                }}>
                   <p onClick={()=>{
                        setExchange(!exchange)
                   }}>{`Rank ${insOrDes}`}</p>
                   <p onClick={()=>{
                        setArrangePrice(!arrangePrice)
                   }}>{`Price ${arrangePriceVariable}`}</p>
                   <p>Side-Part</p>
                </div>
            </div>
        </>
    )
}