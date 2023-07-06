import React from "react";
import { BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import dumbbell1 from "../dumbbell1.png"
import "./NavBar.css"


export default function NavBar(){
    return(
        <header>
            <img src={dumbbell1} className='navbarImg'/>
            <h2 className='title'>Workout <span>Hub</span></h2>
            <nav>
                <Link to= "/" className= "link">
                Home
                </Link>
                <Link to= '/exercises' className='link'>
                Add Exercises
                </Link>
                <Link to= '/myWorkouts' className='link'>
                My Workouts 
                </Link>
                <Link to= '/login' className='link'>
                Login
                </Link>
            </nav>
        </header>
    )
}