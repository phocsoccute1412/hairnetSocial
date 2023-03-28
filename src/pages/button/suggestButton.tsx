import Image from "next/image"
export default function SuggestButton(props:any){
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
                   <p>Buzz Cut</p>
                   <p>Layer</p>
                   <p>Side-Part</p>
                </div>
            </div>
        </>
    )
}