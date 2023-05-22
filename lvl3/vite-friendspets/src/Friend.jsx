import React from "react"
import Pet from "./Pet"

export default function Friend(props){
    const pets = props.item.pets.map(pet =>{
    return(
        <Pet
            name = {pet.name}
            breed = {pet.breed}
        />
    )
})
    return(
        <div className="friendDiv">
            <img src={props.item.img}/>
            <h2> Owner: {props.item.name}</h2>
            <h3> Age: {props.item.age}</h3>
            <h3>Pets:</h3>
            {pets}
        </div>
    )
}