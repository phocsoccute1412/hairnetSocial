import homecss from '../../styles/homePage.module.css';
export default function SignupForm(){
    return (
        <div className={homecss.homeSignUp}>
            <h1 className={homecss.signuptext}>Sign up to start</h1>
            <form action="" className={homecss.form}>
                <div className={homecss.record}>
                    <label htmlFor="">User Name</label>
                    <input type="text" className={homecss.blank1} />
                </div>
                <div className={homecss.record}>
                    <label htmlFor="">Email</label>
                    <input type="text" className={homecss.blank2}/>
                </div>
                <div className={homecss.record}>
                    <label htmlFor="">Phone</label>
                    <input type="text" className={homecss.blank3}/>
                </div>
                <div className={homecss.otherSignUpText}>
                    <button className={homecss.buttonSignup}>Submit</button>
                    <p>Or visit like <a href=""><i>Guest</i></a></p>
                </div>
            </form>
        </div>
    )
}