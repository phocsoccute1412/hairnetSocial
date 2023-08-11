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
    var rankArrange = router.rankArrange?.toString().split(' ')
    var priceArrange = router.priceArrange?.toString().split(' ')
    var rank
    var price
    var value

    if(params!= undefined) value = parseInt(params,10)

    if(rankArrange){
        if(rankArrange[1]== 'Increase') rank=1
        else rank=-1
    }

    if(priceArrange){
        if(priceArrange[1]== 'Increase') price=1
        else price=-1
    }
    
    const db = client.db('hairnet')
    const listOfMaleHairs = db.collection('Businesses')
    const pipeline = []
    
    pipeline.push({'$lookup': {
        from: "Products",
        localField: "name",
        foreignField:"hostID",
        as: "Products"
    }},
    {
        '$unwind':"$Products"
    },
    {
        '$project': {
            _id:1,
            rank:1,
            name:1,
            'Products.title':1,
            upperName:{$toUpper:'$name'},
            upperType:{$toUpper:'$Products.title'},
            'Products.imageSrc':1,
            'Products.price':1
        }
    })

    if(filterSearchValue!=undefined) pipeline.push({'$match':{'$or':[
        {upperName:filterSearchValue.toUpperCase()},
        {upperType:filterSearchValue.toUpperCase()}
    ]}})

    const joinCollect = await listOfMaleHairs.aggregate(pipeline).sort({rank:rank, 'Products.price':price}).skip(value).limit(5).toArray()
    for(var i = 0; i <joinCollect.length; i++) {
        for(var j = 0; j < i;j++){
            if(joinCollect[i].name === joinCollect[j].name && joinCollect[i].upperType === joinCollect[j].upperType){
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
