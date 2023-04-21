import admincss from '../../styles/adminPage.module.css';
import {useState} from 'react'
import ImageRank from './returnRank';
export default function AdminPage(){
    const [rank,setRank]=useState(0)
    return (
        <>
            <h1>Set Rank</h1>
            <label htmlFor="">0</label>
            <input type="radio" name="rank" value="0"/>
            <label htmlFor="">1</label>
            <input type="radio" name="rank" value="1"/>
            <label htmlFor="">2</label>
            <input type="radio" name="rank" value="2"/>
            <label htmlFor="">3</label>
            <input type="radio" name="rank" value="3"/>
            <label htmlFor="">4</label>
            <input type="radio" name="rank" value="4"/>
            <label htmlFor="">5</label>
            <input type="radio" name="rank" value="5"/>
            <button onClick={()=>{
                const inputEles = document.querySelectorAll('input[name="rank"]') as NodeListOf<HTMLInputElement>
                for (let index = 0; index < inputEles.length; index++) {
                    if(inputEles[index].checked) 
                    setRank(index);
                }
            }}>Save</button>
            <br />
            <ImageRank rank={rank}></ImageRank>
        </>
    )
}
