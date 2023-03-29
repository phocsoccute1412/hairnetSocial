import Image from "next/image"
export default function BlockCombo(props:any){
    return (
        <>
            <div className={props.block}>
                <Image src='/images/publicPageImages/post1.jpg' alt="picture"
                width={500}
                height={500}
                style={{width:'250px',height:'300px'}}></Image>
                <div className={props.blockdescript}>
                    <div className={props.titleanddescript}>
                        <h3>Title</h3>
                        <p>Descript</p>
                    </div>
                    <div className={props.hostandrank}>
                        <h4>(host)</h4>
                        <p>Hairshop1</p>
                    </div>
                </div>
            </div>
        </>
    )
}