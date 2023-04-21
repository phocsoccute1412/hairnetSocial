import { NextApiResponse, NextApiRequest } from "next";
import {setCookie, getCookie,hasCookie,deleteCookie} from 'cookies-next'

export default function testCookies(req:NextApiRequest, res: NextApiResponse){
    if(hasCookie('account_exist',{req,res})) {res.status(200).json({valid_account:"welcome back"})}
    else {
        setCookie('account_exist',req.body.username, { req, res, maxAge: 24*60*60*1000 })
        res.status(200).json({result:'account created successfully'})
    }
    console.log(getCookie('account_exist',{req,res}))
}