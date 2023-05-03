import React from "react";
import { useNavigate} from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    return(
        <div className="homeContainer">
            <h1>Welcome to Workout <span>Hub</span></h1>
            <h2>Your onestop for a personalized workout</h2>

            <button onClick={()=> navigate('/exercises')} cl>Personalize My Workout</button>
        </div>
    )
}