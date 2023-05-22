import React, {useState} from "react"

export default function Cards(props){
    const [decor, setDecor] = useState("");

    if (props.item.timeToGo === "winter") {
        setDecor("blue");
    }
    return (
        <div>
            {decor && <div className="cardDiv" style={{ color: decor }}>{decor}</div>}
            <div className="cardDiv"> 
                <img src={props.item.image}/>
                <h1 className="cardTitle">{props.item.place}</h1>
                <div className="cardInfo">
                    <h3><span>Season:</span> {props.item.timeToGo}</h3>
                    <h4>Flight Ticket Price ${props.item.price} USD</h4>
                </div>
            </div>
        </div>
    )
} 