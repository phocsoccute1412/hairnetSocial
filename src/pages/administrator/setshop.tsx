import admincss from '../../styles/adminPage.module.css';
import { useRouter } from 'next/router';
import AdminHeader from './headeradmin';
import Sidebar from './sidebarmenu';
import { useEffect, useState } from 'react';
export default function AdminPage(){
    const router = useRouter()
    useEffect(() =>{
        router.push('/administrator')
    },[])
    return (
        <>
            <AdminHeader></AdminHeader>
            <Sidebar></Sidebar>
            <div className={admincss.setshop}>
                <div className={admincss.title}>
                    <h1>Admin Page</h1>
                </div>
                <div className={admincss.form_set_shop}>
                    <form action="">
                        <label htmlFor="">Shop Name</label>
                        <input type="text" name='shopname'/>
                        <br />
                        <label htmlFor="">Shop Phone</label>
                        <input type="text" name='shopphone'/>
                        <br />
                        <label htmlFor="">Shop Email</label>
                        <input type="text" name='shopemail'/>
                        <br />
                        <label htmlFor="">Shop Address</label>
                        <input type="text" name='shopaddress'/>
                        <br />
                        <label htmlFor="">Shop Rank</label>
                        <input type="text" name='shoprank'/>
                        <br />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
