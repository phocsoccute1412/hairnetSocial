import AdminHeader from "./headeradmin"
import loginadcss from '../../styles/adminlogin.module.css'

export default function LoginAdmin(){
    return(
        <>
            <AdminHeader></AdminHeader>
            <h1 className={loginadcss.title}>Login Admin</h1>
            <form action="/api/handleAdminAccount" className={loginadcss.form} method="POST">
                <label htmlFor="">User Name</label>
                <input type="text" name="usernameadmin" required/>
                <br />
                <label htmlFor="">Pasword</label>
                <input type="text" name="passadmin" required/>
                <br />
                <button>Login</button>
            </form>
        </>
    )
}