import Header from "../header"
import Footer from "../footer"
import homecss from "../../styles/homePage.module.css"
export default function FormLogin() {
    return (
        <>
        <Header></Header>
            <h1 className={homecss.loginTitle}>Log in account</h1>
            <form action="" className={homecss.formLoginPersonalPage}>
                <div className={homecss.part}>
                    <label htmlFor="">User Name or Email</label>
                    <input type="text" className={homecss.inputPart1}/>
                </div>
                <div className={homecss.part}>
                    <label htmlFor="">Password</label>
                    <input type="text" className={homecss.inputPart2}/>
                </div>
                <div className={homecss.containerVisit}>
                    <button className={homecss.loginButton}>Login</button>
                    <p className={homecss.textVisit}>Or visit like <a href=""><i>Guest</i></a></p>
                </div>
            </form>
        <footer>
            <Footer></Footer>
        </footer>
        </>
    )
}