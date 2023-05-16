import Image from "next/image"
import {useState, useEffect} from "react"

export default function SuggestButton(props:any){
    const [arrayMale, setArrayMale] = useState([])
    const arrayFemale = ['Layer','Uốn','Nhuộm']

    useEffect(()=>{
        fetch('http://localhost:3000/api/fetchMaleTypeHair')
        .then(response => response.json())
        .then(data => {
            setArrayMale(data)
        })
    },[])
    var suggests

    if(props.checkArray)
        suggests = arrayMale.map((suggest:any) => <p key={suggest._id}>{suggest.type}</p>)
    else suggests = arrayFemale.map(suggest => <p key={suggest}>{suggest}</p>)

    return (
        <>
            <div className={props.dropdownSuggestButton}>
                <Image src="/images/publicPageImages/suggest.png" alt="picture"
                width={500} height={500}
                style={{width:"30px",height:"30px",borderRadius:"5px"}}
                className={props.nut_dropdownSuggest} onClick={()=>{
                    const eles:any = document.querySelector('#Suggest')
                    const elesDropDown:any = document.querySelector('#target')
                    if(elesDropDown != null){
                        if(elesDropDown.classList.contains(props.active)) elesDropDown.classList.remove(props.active)
                    }
                    if(eles!= null) eles.classList.toggle(props.activeSuggest)
                }}></Image>
                <div id= 'Suggest' className={props.noidung_dropdownSuggest}>
                   <>{suggests}</>
                </div>
            </div>
        </>
    )
}