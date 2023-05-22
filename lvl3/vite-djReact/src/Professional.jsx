import React from "react"

export default function Professional(props){
    return(
        <div>
            <button onClick={props.handleClick} className="proLeft">proDjleft</button>
            <button onClick={props.handleClick1} className="proRight">proDjright</button>
        </div>
    )
}