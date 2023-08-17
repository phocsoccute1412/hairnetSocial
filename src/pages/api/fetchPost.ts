import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const {MongoClient} = require("mongodb")

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const config = {
    api: {
        bodyParser:false
    }
}

const fetchPost: NextApiHandler = async (req, res) => {
    const db = client.db('hairnet')
    const posts = db.collection('Posts')
    const query = {}
    const data = await posts.find(query).limit(2).toArray()
    res.status(200).json(data)

}

export default fetchPost