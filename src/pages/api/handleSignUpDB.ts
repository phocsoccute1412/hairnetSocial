import { NextApiRequest, NextApiResponse } from "next";
const {MongoClient} = require("mongodb")

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
export default async function(req:NextApiRequest, res:NextApiResponse){
    try {
        const database = client.db('hairnet')
        const users = database.collection('Users')
        const query= {username:req.body.userName, password:req.body.password, phone:req.body.Phone}
        const test = await users.find(query).limit(2).toArray();
        if(test.length === 0){
            res.status(200).json({message:'account created'})
                const newUser = await users.insertOne({
                username: req.body.userName,
                email: req.body.Email,
                password: req.body.password,
                phone: req.body.Phone
            })
        }
        else res.status(200).json(test)
        res.status(200).json({type:typeof test})
    } catch (error) {
        console.log(error)
    }
}
// const test = await users.find(query).limit(2).toArray()