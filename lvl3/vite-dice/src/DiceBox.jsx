import React from "react"
import Die from "./Die"


export default function DiceBox(){
    const [numbers, setNumbers] = React.useState([1, 2, 5, 6, 3])
    const newNumbers = []
    //make a method that produces 5 random numbers b/w 1-6 and saves in state (previous callback)
function rollDice(){
    for(let i = 0; i < 5; i++ ){
        newNumbers.push(Math.floor(Math.random() * 6 + 1))
    }
    setNumbers(newNumbers) //this is changing the state of the numbers 
    
}


    //Display the 5 random numbers in your <DiceBox /> JSX.
    //make a button user clicks that redoes the random #s 
    return(
        <div className= 'diceDiv'>
            <Die handleClick ={rollDice} numbers ={numbers}/>
        </div>
    )
}