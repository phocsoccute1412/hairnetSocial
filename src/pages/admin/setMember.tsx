export default function SetMember({props}:any){
    return (
        <>
            <h1 className={props.titleType}>Set Member</h1>
            <form action="" method="POST" className={props.formSetMember}>
                <div className={props.rowForm}>
                    <label htmlFor="userName">User Name</label>
                    <br />
                    <input type="text" id="userName" name="userName"/>
                </div>
                <div className={props.rowForm}>
                    <label htmlFor="account">Account Log In</label>
                    <br />
                    <input type="text" id="account" name="account"/>
                </div>
                <div className={props.rowForm}>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="text" id="password" name="password"/>
                </div>
                <div className={props.rowForm}>
                    <label htmlFor="password">Level</label>
                    <br />
                    <input type="text" id="level" name="level"/>
                </div>
                <div className={props.rowForm}>
                    <button type="submit">Save</button>
                </div>
            </form>
        </>
    )
}