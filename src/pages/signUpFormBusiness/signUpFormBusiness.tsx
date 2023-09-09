import formcss from "../../styles/form.module.css"

import Footer from "../footer"
import Header from "../header"

export default function SignUpFormBusiness(){
    return (
        <>
            <Header></Header>
            <h1 className={formcss.title}>Sign Up Business</h1>
            <form action="/api/fetchPost" className={formcss.formSignUpBusiness} method="POST">
                <div className={formcss.rowInput__wrapper}>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div className={formcss.rowInput__wrapper}>
                    <label htmlFor="">Phone</label>
                    <input type="text" />
                </div>
                <div className={formcss.rowInput__wrapper}>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className={formcss.rowInput__wrapper}>
                    <label htmlFor="">Address</label>
                    <input type="text" />
                </div>
                <div className={formcss.buttonForm__wrapper}>
                    <button className={formcss.buttonForm__submit} type="submit">Submit</button>
                    <button className={formcss.buttonForm__clearForm} type="reset">Clear</button>
                </div>
            </form>
            <Footer optionClass={formcss.footer}></Footer>
        </>
    )
}