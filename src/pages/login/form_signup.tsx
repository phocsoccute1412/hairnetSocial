import homecss from '../../styles/homePage.module.css';
import { NextApiRequest, NextApiResponse } from 'next';
async function handle(req:NextApiRequest,res:NextApiResponse){
    res.status(200);
}
export default function SignupForm(){
    return (
        <div className={homecss.homeSignUp}>
            <h1 className={homecss.signuptext}>Sign up to start</h1>
            <form action="/api/testbot1" className={homecss.form} method='POST'>
                <div className={homecss.record}>
                    <label htmlFor="">User Name</label>
                    <input type="text" className={homecss.blank1} required name='userName'/>
                </div>
                <div className={homecss.record}>
                    <label htmlFor="">Email</label>
                    <input type="text" className={homecss.blank2} required name='Email'/>
                </div>
                <div className={homecss.record}>
                    <label htmlFor="">Phone</label>
                    <input type="text" className={homecss.blank3} name='Phone'/>
                </div>
                <div className={homecss.otherSignUpText}>
                    <button className={homecss.buttonSignup}>Submit</button>
                    <p>Or visit like <a href=""><i>Guest</i></a></p>
                </div>
            </form>
        </div>
    )
}