export default function DropdownButton(props:any){
    return (
        <>
            <div className={props.dropdown}>
                <button className={props.nut_dropdown} onClick={()=>{
                    
                }}>Dropdown</button>
                <div className={`target ${props.noidung_dropdown}`}>
                   <p>Đường dẫn 1</p>
                   <p>Đường dẫn 2</p>
                   <p>Đường dẫn 3</p>
                </div>
            </div>
        </>
    )
}
DropdownButton.defaultProps = {
    dropdown:'dropdown',
    nut_dropdown:'nut_dropdown',
    noidung_dropdown:'noidung_dropdown',
    handleDropDown:()=>{}
}