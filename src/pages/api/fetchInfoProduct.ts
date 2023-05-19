import formidable from "formidable";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const {MongoClient} = require("mongodb")

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const config = {
    api: {
        bodyParser:false
    }
}


const fetchInfoProduct:NextApiHandler = async (req, res)=> {
    const router = req.query
    var params = router.skipValue?.toString()
    var filterSearchValue = router.filterSearch?.toString()
    var value

    if(params!= undefined) value = parseInt(params,10)
    
    const db = client.db('hairnet')
    const listOfMaleHairs = db.collection('Businesses')
    const pipeline = []
    
    pipeline.push({'$lookup': {
        from: "MaleHairList",
        localField: "name",
        foreignField:"listStoreHave",
        as: "listStore"
    }},
    {
        '$unwind':"$listStore"
    },
    {
        '$lookup': {
            from: "Images",
            localField:"name",
            foreignField:"HostID",
            as:"srcImage"
        }
    },
    {
        '$unwind': "$srcImage"
    },
    {
        '$project': {
            _id:1,
            rank:1,
            name:1,
            'listStore.type':1,
            'srcImage.src':1
        }
    })

    if(filterSearchValue!=undefined) pipeline.push({'$match':{'listStore.type':filterSearchValue}})

    const joinCollect = await listOfMaleHairs.aggregate(pipeline).sort({_id:-1}).skip(value).limit(5).toArray()
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
