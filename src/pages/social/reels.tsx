import ReelElement from "./reelelement"

import socialcss from "../../styles/social.module.css"

export default function Reels(){
    return (
        <>
            <div className={socialcss.bodyRight__reelPart}>
                <ReelElement></ReelElement>
                <ReelElement></ReelElement>
                <ReelElement></ReelElement>
                <ReelElement></ReelElement>
                <ReelElement></ReelElement>
            </div>
        </>
    )
}