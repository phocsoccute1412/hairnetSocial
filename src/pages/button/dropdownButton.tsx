import { useState } from "react"
import Image from "next/image"
export default function DropdownButton(props:any){
    const [exchange, setExchange]=useState(false)
    var insOrDes = ''
    if(exchange) insOrDes = 'Increase'
    else insOrDes = 'Decrease'
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
                   <p>Layer</p>
                   <p>Side-Part</p>
                </div>
            </div>
        </>
    )
}