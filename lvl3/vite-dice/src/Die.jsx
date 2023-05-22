import React from 'react'
import images from './images'



export default function Die(props){

    return(
    <div className='ulDiv'>
            <ul>  
                <li className="dice1">{props.numbers[0]}</li>
                <li className="dice2">{props.numbers[1]}</li>
                <li className="dice3">{props.numbers[2]}</li>
                <li className="dice4">{props.numbers[3]}</li>
                <li className="dice5">{props.numbers[4]}</li>
            </ul>   
            <button onClick={props.handleClick}>Roll Dice</button>
    </div>
    )
}