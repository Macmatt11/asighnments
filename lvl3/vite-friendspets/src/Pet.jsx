import React from "react"

export default function Pets(props){
    return(
        <div>
            <ul>
                <li>
                    <div>
                        <span>Name:{props.name}</span> <span> Breed: {props.breed}</span>                      
                    </div>
                </li>
            </ul>
        </div>
    )
}