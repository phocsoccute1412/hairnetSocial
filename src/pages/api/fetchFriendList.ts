import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { hasCookie, getCookie } from "cookies-next";

const {MongoClient} = require("mongodb")

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const config = {
    api: {
        bodyParser:false
    }
}

const fetchInfoProduct:NextApiHandler = async (req, res) =>{

    const db = client.db('hairnet');
    const friendlist = db.collection('UserFriendList');
    var cookieObj

    if(hasCookie('account_exist',{req,res})){
        const cookie=getCookie('account_exist',{req,res})?.toString()
        if(cookie){
            cookieObj = JSON.parse(cookie)
        }
        const query={hostID:cookieObj.username}
        const friends = await friendlist.find(query).limit(1).toArray()
        res.status(200).json(friends)
    }
    else res.status(404).json({status:'error'})
}
export default fetchInfoProduct