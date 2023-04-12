import type { NextApiRequest, NextApiResponse } from 'next'
const {MongoClient} = require('mongodb')
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  try {
    const database = client.db('hairnet')
    const users = database.collection('Users')
    const query = {name:'testbot1'}
    const user = await users.find(query).toArray(function (err:any, result:any) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
      //Close connection
      database.close();
    });
    res.json(user)
  } catch (err) {
    console.log("error")
  }
}