import React from "react"

export default function SmallTime(props){
    return(
        <div>
            <button onClick={props.handleClick} className="smallTime" >SmallTime DJ</button>
        </div>
    )
}