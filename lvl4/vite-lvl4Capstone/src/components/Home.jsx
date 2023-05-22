import React from "react";
import { useNavigate} from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    return(
        <div className="homeContainer">
            <h1 className="homeTitle">Welcome to Workout <span>Hub</span></h1>
            <h2 className="homeOnestop">Your onestop for a personalized workout</h2>
            <p className="homePara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus vitae voluptates animi. Voluptatibus, saepe voluptate 
            cupiditate optio numquam iste? Labore magni iusto earum numquam voluptatibus maiores eum repellat perspiciatis inventore!
            </p>
            <button onClick={()=> navigate('/exercises')} className="homeButton">Personalize My Workout</button>
        </div>
    )
}