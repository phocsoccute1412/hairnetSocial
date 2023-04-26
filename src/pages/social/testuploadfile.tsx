import axios from "axios";
import { NextPage } from "next";
import {useState} from 'react'

interface Props {}

const Homee:NextPage<Props> =()=>{
    const [uploading, setUploading] = useState(false)
    const [selectedImage, setSelectedImage] = useState('')
    const [selectedFile, setSelectedFile] = useState<File>()

    const handleUpload = async () => {
        setUploading(true)
        try {
            if(!selectedFile) return
            const formData = new FormData()
            formData.append('myImage', selectedFile)
            // const {data} = await axios.post("/api/testImage", formData)
            // console.log(data)
        } catch (error:any) {
            console.log(error.response?.data)
        }
        setUploading(false)
    }
    return (
        <div>
            <form action="/api/testImage" method="POST">
            <label htmlFor="">
                <input type="file"
                onChange={({target}) =>{
                    if(target.files){
                        const file = target.files[0]
                        setSelectedImage(URL.createObjectURL(file))
                        setSelectedFile(file)
                    }
                }}/>
                <div>{selectedImage?(<img src={selectedImage} alt="" />):<span>Select Image</span>}</div>
            </label>
            <button type="submit" onClick={handleUpload}>submit</button>
            </form>
        </div>
    )
}
export default Homee