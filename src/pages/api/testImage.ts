import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import { getCookie, hasCookie } from "cookies-next";
import axios from "axios";

const {MongoClient} = require("mongodb")

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export const config = {
  api: {
    bodyParser:false
  }
}

const readFile = (req:NextApiRequest, res:NextApiResponse, saveLocally?:boolean):Promise<{fields:formidable.Fields, files:formidable.Files}> =>{
  const options:formidable.Options = {}
  if(saveLocally){
    options.uploadDir = path.join(process.cwd(),'/public/uploads')
    options.filename = (name, ext, path, form) =>{
      return 'images' + '_' + path.originalFilename
    }
  }
  const form = formidable(options)
  return new Promise((resolve, reject) =>{
    form.parse(req, (err, fields, files) =>{
      if(err) reject(err)
      resolve({fields, files})
    })
  })
}

const handler:NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd()+'/public', '/uploads'))
  } catch (error) {
    await fs.mkdir(path.join(process.cwd()+'/public', '/uploads'))
  }
  readFile(req, res, true)
  res.status(200).json({message:'Logo inserted successfully'})
}
export default handler
