import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

const {MongoClient} = require("mongodb")

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export const config = {
  api: {
    bodyParser:false
  }
}

const readFile = (req:NextApiRequest, res:NextApiResponse):Promise<{fields:formidable.Fields, files:formidable.Files}> =>{
  const form = formidable()
  return new Promise((resolve, reject) =>{
    form.parse(req, (err, fields, files) =>{
      if(err) reject(err)
      resolve({fields, files})
    })
  })
}

const handler:NextApiHandler = async (req, res) => {
  const db = client.db('hairnet')
  const imageDB = db.collection('Images')
  const adminAccount = db.collection('AdminAccounts')
  readFile(req, res).then(async ({fields,files})=>{
    const findAdminID = await adminAccount.find({username:fields.shopname[0]}).limit(2).toArray()
    if(findAdminID.length > 0) res.status(200).json({Message: 'Account Exist'})
    else {
      const insertImage = await imageDB.insertOne({src:fields.urlImage[0], HostID:fields.shopname[0]})
    }
    console.log(fields.urlImage[0])
  })
  res.status(200).json({Message: 'Account Created'})
}
export default handler
