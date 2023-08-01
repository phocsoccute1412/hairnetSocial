import footercss from '../styles/footer.module.css'
export default function Footer(props:any){
    return (
        <>
            <div className={`${footercss.footer} ${props.optionClass}`}>
                <h3 className={footercss.titleFooter}>The Property of LTK</h3>
                <div className={footercss.contact}>
                    <p>Gmail:<i> khanhnguyenkatee1412@gmail.com</i></p>
                    <p>Phone:<i> 0984521214</i></p>
                </div>
            </div>
            
        </>
    )
}