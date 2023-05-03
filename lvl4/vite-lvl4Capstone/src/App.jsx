import React from 'react'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Exercise from './components/Exercise'
import MyWorkoutDetails from './components/MyWorkoutDetails'
import MyWorkouts from './components/MyWorkouts'
import Login from './components/Login'
import { BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import dumbbell1 from "./dumbbell1.png"


function App() {


  return (
    <Router className='container' >
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
      <Routes>
        <Route path= '/' element = {<Home/>} />
        <Route path= '/exercises' element = {<Exercise/>} />
        <Route path= 'myWorkouts' element = {<MyWorkouts/>} />
        <Route path= 'login' element = {<Login/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

// 1. our site must have at least 3 views (pages) using React Router.
// 2. Remember to use context and hooks like useState, useEffect, useRef where needed
// 3. Your site must be responsive. You may use any method to accomplish this.

//create a component folder:
// []-navbar needed with links 
// []-footer needed 
// []-home page needed with a form consisting of username email and password 
// []-create a function to submit user data and save in local storage 
// []-exercise component needed. In exercise a form is needed where the user inputs the muscle group, sets and reps, and time of rest
// []-here a get function will be needed to retrieve api data 
// []-set state for exercise data 
// []-an add to list button will be selected and adds the workout to the list.
// []-make a submit button to submit the list data to myworkouts 
// []-create my workout page. make all links and when clicked will take you to workout details page 
// []-make a context component 