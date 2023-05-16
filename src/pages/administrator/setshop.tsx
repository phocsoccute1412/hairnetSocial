import admincss from '../../styles/adminPage.module.css';
import { useRouter } from 'next/router';
import AdminHeader from './headeradmin';
import Sidebar from './sidebarmenu';
import { useEffect, useState, useRef, ReactNode } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function AdminPage():JSX.Element{
    const router = useRouter()

    useEffect(() =>{
        router.push('/administrator')
    },[])

    const [uploading, setUploading] = useState(false)
    const [imageSelected, setImageSelected] = useState('')
    const [fileSelected, setFileSelected] = useState<File>()
    const [sliderImage, setSliderImage] = useState<Array<string>>([])
    const [fileSlider, setFileSlider] = useState<Array<File>>([])
    const [shopname, setShopName] = useState('')

    const handler = async () => {
        // const buttonFormInfo = document.querySelector('#formInfo') as HTMLFormElement
        // if(buttonFormInfo) buttonFormInfo.submit()

        setUploading(true)

        if(!fileSlider) return
        const formDataDB = new FormData()
        const formData = new FormData()
        const formDataSlider = new FormData()
        // formData.append("LogoBusiness", fileSelected)

        for(let i = 0; i < fileSlider.length; i++){
            formDataSlider.append('ImageSlider[]', fileSlider[i])
        }

        // const {data} = await axios.post('/api/testImage', formData)
        const dataSlider = await axios.post('/api/handleImageSliderShop',formDataSlider)

        // const imageURL = `/uploads/images_${fileSelected.name}`
        // formDataDB.append('urlImage',imageURL)
        // formDataDB.append('shopname', shopname)
        // const insertImageURL = await axios.post('/api/handleInsertImageURL', formDataDB)

        setUploading(false)
    }
    return (
        <>
            <Sidebar></Sidebar>
            <AdminHeader></AdminHeader>
            <div className={admincss.setshop}>
                <div className={admincss.title}>
                    <h1>Admin Page</h1>
                </div>
                <div className={admincss.form_set_shop}>
                    <form id='formInfo' action="/api/insertDBSetShop" method='POST'>
                        <label htmlFor="">Shop Name</label>
                        <input type="text" name='shopname' onChange={(e)=>{setShopName(e.target.value)}}/>
                        <br />
                        <label htmlFor="">Shop Phone</label>
                        <input type="text" name='shopphone'/>
                        <br />
                        <label htmlFor="">Shop Email</label>
                        <input type="text" name='shopemail'/>
                        <br />
                        <label htmlFor="">Shop Address</label>
                        <input type="text" name='shopaddress'/>
                        <br />
                        <label htmlFor="">Shop Rank</label>
                        <input type="text" name='shoprank'/>
                        <br />
                        <button type='submit' hidden id='buttonFormInfo'>Submit Shop Info</button>
                    </form>
                    <div className={admincss.wrapAddImage}>
                        <label className= {admincss.addLogoClick} htmlFor={admincss.input_image}>Add Logo</label>
                        <input type="file" id={admincss.input_image} hidden onChange={({target})=>{
                            if(target.files){
                            const file = target.files[0]
                            setImageSelected(URL.createObjectURL(file))
                            setFileSelected(file)
                            }
                        }}/>
                        <div className={admincss.uploadImage_area}>
                            <Image src={imageSelected} alt='picture' width={100} height={100}></Image>
                        </div>
                        <label className= {admincss.addLogoClick} htmlFor={admincss.input_image_slider}>Add Image Slider</label>
                        <input type="file" id={admincss.input_image_slider} multiple hidden onChange={({target}:React.ChangeEvent<HTMLInputElement>)=>{
                            if(target.files){
                                const file = target.files
                                const urls = []
                                const fileImages = []
                                for(let i=0; i<file.length; i++){
                                    const urlImage = URL.createObjectURL(file[i])
                                    urls.push(urlImage)
                                    fileImages.push(file[i])
                                }
                                setSliderImage(urls)
                                setFileSlider(fileImages) 
                            }
                        }}/>
                        <div className={admincss.uploadImage_area}>
                            <>
                            {sliderImage.map(image => (
                                <>
                                    <Image id='sliderImage' src={image} alt='picture' width={100} height={100} key={image}></Image>
                                </>
                            ))}
                            </>
                        </div>
                    </div>
                    <button className={admincss.buttonLogo} onClick={handler}>Submit</button>
                </div>
            </div>
        </>
    )
}