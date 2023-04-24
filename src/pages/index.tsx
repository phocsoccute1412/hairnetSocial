import MenPage from './menPage'
import { hasCookie } from 'cookies-next'
import Home from './signup'
export default function Test(){
    if(!hasCookie('account_exist')) return (
        <>
            <Home></Home>
        </>
    )
    else return (
        <>
            <MenPage></MenPage>
        </>
    )
}