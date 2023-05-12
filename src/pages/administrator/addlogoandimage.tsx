import {useState} from 'react'
import Image from 'next/image'
import axios from 'axios'

export default function AddLogoAndImage(props:any){

    const [uploading, setUploading] = useState(false)
    const [imageSelected, setImageSelected] = useState('')
    const [fileSelected, setFileSelected] = useState<File>()

    const handler = async () => {
        setUploading(true)
        if(!fileSelected) return
        const formData = new FormData()
        formData.append("LogoBusiness", fileSelected)
        const {data} = await axios.post('/api/testImage', formData)
        console.log(data)
        setUploading(false)
    }
    return (
        <>
            <div className={props.form_image}>
                <label htmlFor={props.input_image}>Add Logo</label>
                <input type="file" id={props.input_image} hidden onChange={({target})=>{
                    if(target.files){
                        const file = target.files[0]
                        setImageSelected(URL.createObjectURL(file))
                        setFileSelected(file)
                    }
                }}/>
                <div className={props.uploadImage_area}>
                    <Image src={imageSelected} alt='picture' width={300} height={300}></Image>
                </div>
                <button onClick={handler}>Submit</button>
            </div>
        </>
    )
}