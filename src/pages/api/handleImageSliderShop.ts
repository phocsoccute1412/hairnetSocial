import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs/promises"
import path from "path";

export const config = {
    api: {
        bodyParser:false
    }
}

const readFile = (req:NextApiRequest, res:NextApiResponse, saveLocally:boolean):Promise<{
    fields:formidable.Fields, files:formidable.Files
}> =>{
    const options: formidable.Options = {}
    if(saveLocally) {
        options.uploadDir = path.join(process.cwd(), '/public/uploads')
        options.filename = (name, ext, part, form) => {
            return 'sliders' + '_' + part.originalFilename
        }
    }

    const form = formidable(options)
    return new Promise((resolve, rejects)=>{
        form.parse(req, (err, fields, files) => {
            if(err) rejects(err)
            resolve({fields, files})
        })
    })
}

const handler:NextApiHandler = async (req, res) =>{
    try {
        await fs.readdir(path.join(process.cwd()+'/public', 'uploads'))
    } catch (error) {
        await fs.mkdir(path.join(process.cwd()+'/public', 'uploads'))
    }
    readFile(req, res, true)
    res.status(200).json({message:'Slider upload successful'})
}

export default handler