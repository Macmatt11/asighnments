import React from "react"

export default function BigTime(props){
    return(
        <div>
            <button onClick={props.handleClick1} className="bigTime1"> Big Time tp Lft </button>
            <button onClick={props.handleClick2} className="bigTime1"> Big Time tp rt </button>
            <button onClick={props.handleClick3} className="bigTime1"> Big time btm lft</button>
            <button onClick={props.handleClick4} className="bigTime1"> Big time btm rt </button>
        </div>
    )
}