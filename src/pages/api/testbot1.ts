import type { NextApiRequest, NextApiResponse } from 'next'
const {MongoClient} = require('mongodb')
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  // try {
    try{
    const database = client.db('hairnet')
    const users = database.collection('Users')
    const query = {name:'testbot1'}
    const results = await users.insertOne({
      username: req.body.userName,
      email: req.body.Email,
      password: req.body.Phone
    })
    res.status(200)
    res.redirect(307,'/')
  }
  catch(err) {console.log(err)}
  //   const user = await users.find(query).toArray(function (err:any, result:any) {
  //     if (err) {
  //       console.log(err);
  //     } else if (result.length) {
  //       console.log('Found:', result);
  //     } else {
  //       console.log('No document(s) found with defined "find" criteria!');
  //     }
  //     //Close connection
  //     database.close();
  //   });
  // } catch (err) {
  //   console.log("error")
  // }
}