import React from "react"

export default function Greats(props){
    return(
        <div>
            <div>
                <button onClick={props.onClick1} className="greats">Music</button>
            </div>
        </div>
    )
}