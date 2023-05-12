import { NextApiRequest, NextApiResponse } from "next";

const {MongoClient} = require('mongodb')
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)
export default async function insertDBSetShop(req:NextApiRequest, res:NextApiResponse){
    try{
        const database = client.db('hairnet')
        const shop = database.collection('Businesses')
        const accountAdmin = database.collection('AdminAccounts')
        const query = {name:'testbot1'}
        const queryCheckExistAccount = {username:req.body.shopname}
        const testAccountExist = await accountAdmin.find(queryCheckExistAccount).limit(2).toArray()
        if(testAccountExist.length!=0) res.status(200).json({message:"this account is already exist"})
        else {
            const passwordAccount = req.body.shopname + '@hairnet.com'
            const insertAdminAccount = await accountAdmin.insertOne({
            username: req.body.shopname,
            email: req.body.shopemail,
            password: passwordAccount,
            hiddenLevel: 'trader',
            level: 'administrator'
            })
            const idAccount = await accountAdmin.find({username:req.body.shopname}).limit(2).toArray()
            const insertBusinessAccount = await shop.insertOne({
                name: req.body.shopname,
                email: req.body.shopemail,
                address: req.body.shopaddress,
                phone: req.body.shopphone,
                rank:req.body.shoprank,
                idAccountAdmin:idAccount[0]._id
            })
            res.status(200).json({messenger:'Account created successfully'})
        }
      }
    catch(err) {console.log(err)}
}