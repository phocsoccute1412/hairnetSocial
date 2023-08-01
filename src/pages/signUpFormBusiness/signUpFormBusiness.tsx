import formcss from "../../styles/form.module.css"

import Footer from "../footer"

export default function SignUpFormBusiness(){
    return (
        <>
            <h1 className={formcss.title}>Sign Up Business</h1>
            <form action="" className={formcss.formSignUpBusiness}>
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
                    <button>Submit</button>
                </div>
            </form>
            <Footer optionClass={formcss.footer}></Footer>
        </>
    )
}