import { NextApiHandler } from "next";

const {MongoClient} = require("mongodb")

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const config = {
    
}
const fetchInfoProduct:NextApiHandler = async (req, res)=> {
    const db = client.db('hairnet')
    const listOfMaleHairs = db.collection('Businesses')

    const joinCollect = await listOfMaleHairs.aggregate([
        {'$lookup': {
            from: "MaleHairList",
            localField: "name",
            foreignField:"listStoreHave",
            as: "listStore"
        }},
        {
            '$unwind':"$listStore"
        },
        {
            '$project': {
                _id:1,
                rank:1,
                name:1,
                'listStore.type':1
            }
        }
    ]).sort({_id:-1}).limit(5).toArray()
    for(var i = 0; i <joinCollect.length; i++) {
        for(var j = 0; j < i;j++){
            if(joinCollect[i].name === joinCollect[j].name && joinCollect[i].listStore.type === joinCollect[j].listStore.type){
                joinCollect[j]._id = joinCollect[i]._id
            }
        }
    }
    const test = []
    const seen = new Set();

    for (const item of joinCollect) {
        const key = item._id;
        if (!seen.has(key)) {
        test.push(item);
        seen.add(key);
    }
}
    res.status(200).json(test)
}

export default fetchInfoProduct
