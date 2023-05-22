import React from "react"


export default function Party (props){
    return(
        <div >
            <button onClick={props.handleClick} className="party">partyDj</button>
        </div>
    )
}