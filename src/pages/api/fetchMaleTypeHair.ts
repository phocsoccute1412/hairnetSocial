import { NextApiHandler } from "next";

const {MongoClient} = require("mongodb")

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const fetchMaleTypeHair:NextApiHandler = async (req, res) => {
    const db = client.db('hairnet')
    const listOfMaleHairs = db.collection('MaleHairList')
    const result = await listOfMaleHairs.find({}).sort({_id:-1}).toArray()
    // const joinCollect = await listOfMaleHairs.aggregate([{
    //     '$unwind': "$listStoreHave",
    // },
    //     {'$lookup': {
    //         from: "Businesses",
    //         localField: "listStoreHave",
    //         foreignField:"name",
    //         as: "listStore"
    //     }}
    // ]).toArray()
    // const test = joinCollect[0].listStore
    // console.log(test)
    res.status(200).json(result)
}

export default fetchMaleTypeHair