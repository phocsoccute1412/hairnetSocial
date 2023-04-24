import { NextApiRequest, NextApiResponse} from "next";
import { hasCookie, setCookie } from "cookies-next";

const {MongoClient} = require("mongodb")

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handleAdminAccount(req: NextApiRequest, res: NextApiResponse){
    const db = client.db('hairnet')
    const adminaccount = db.collection('AdminAccounts')
    const query = {username:req.body.usernameadmin, password:req.body.passadmin}
    const result = await adminaccount.find(query).limit(1).toArray()
    var usernameadmin = ''
    var passwordadmin = ''
    if(result.length!==0){
        usernameadmin = result[0].username
        passwordadmin=result[0].password
    }
    if(hasCookie('account_admin_exist',{req,res})){
        res.status(303)
        res.redirect('/administrator')
    }
    else {
        if(result.length!==0) {
            setCookie('account_admin_exist',{username:usernameadmin, password:passwordadmin}, { req, res, maxAge: 60*60*1000 })
            res.status(303)
            res.redirect('/administrator')
        }
        else {
            res.status(404)
            res.json({error: 'Account not found'})
        }
    }
}