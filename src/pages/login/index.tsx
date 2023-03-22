import Header from "../header"
import Footer from "../footer"
import footercss from "../../styles/footer.module.css"
export default function FormLogin() {
    return (
        <>
        <Header></Header>
            <h1 className="loginTitle">Log in account</h1>
            <form action="" className="formLoginPersonalPage">
                <div className="part">
                    <label htmlFor="">User Name or Email</label>
                    <input type="text" className="inputPart1"/>
                </div>
                <div className="part">
                    <label htmlFor="">Password</label>
                    <input type="text" className="inputPart2"/>
                </div>
                <div className="containerVisit">
                    <button className="loginButton">Login</button>
                    <p className="textVisit">Or visit like <a href=""><i>Guest</i></a></p>
                </div>
            </form>
        <footer>
            <Footer footer = {footercss.footer2} titleFooter={footercss.titleFooter2} contact={footercss.contact2}></Footer>
        </footer>
        </>
    )
}