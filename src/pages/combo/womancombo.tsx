import Header from "../header";
import Footer from "../footer";
import BlockCombo from "./blockcombo";
import style from "../../styles/mencombo.module.css"
export default function WomanCombo(){
    const elements = [1,2,3,4]
    const loops = elements.map((element)=>{
        return (
            <BlockCombo
                key={element}
                block={style.block}
                blockdescript={style.blockdescript}
                titleanddescript={style.titleanddescript}
                hostandrank={style.hostandrank}>
            </BlockCombo>
        )
    })
    return (
        <>
            <Header></Header>
            <h1 className={style.comboTitleMain}>Woman Combo</h1>
            <div className={style.rowEachContain}>
                <>{loops}</>
            </div>
            {/* hết row 1 */}
            <div className={style.rowEachContain}>
                <>{loops}</>
            </div>
            {/* hết row 2 */}
            <div className={style.rowEachContain}>
                <>{loops}</>
            </div>
            {/* hết row 3 */}
            <Footer></Footer>
        </>
    )
}