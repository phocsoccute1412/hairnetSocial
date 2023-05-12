import Image from "next/image"
import {ChangeEvent} from 'react'
import { useState } from "react"

export default function SearchInput(props:any){
    const [message,setMessage] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const eventValue = event.target.value
        setMessage(eventValue)
    };

    if(message === props.productShopName) console.log(true)
    else console.log(false)

    return (
        <>
        <div className={props.wrapsearch}>
            <label htmlFor={props.searchinput} className={props.labelsearch}>
            <Image src="/images/publicPageImages/lup.png" alt="picture"
            width={19}
            height={19}></Image>
            </label>
            <input type="text" id={props.searchinput} placeholder="Hair Type"
            onChange={handleInputChange} value={message}/>
        </div>
        </>
    )
}