import React from 'react'
import './App.css'
import axios from 'axios'
import Form from './components/Form'
import SavedThings from './components/SavedThings'

function App() {



  return (
    <div>
      <Form/>
      <SavedThings/>
    </div>
  )
}

export default App

//todo 
//[x] make a form component 
//[x] make a context component 
//[x] make a ugly box component 
//[x] create state for saving the form data 
//[x] create a submit function
//[x] create state to save submitted data to an array 
//[x] create an api get request 
//[x] create state to store the api data into an array 
//[x] create an on change function 
//[x] create function for delete 
//[x] create edit function 
//[x] create state for the edit function 
//[x] map and create elements 


// ## Requirements

// - Must have 3 input fields:
// [x] Img url field (A url to an image of an ugly thing)
// [x] Title field (The title of the image that the user wants to give)
// [x] Description field (why the user thinks it is ugly)  
// [x] Must have *Submit* button that submits the data
// [x] Must display a list of posted images with their associated titles and descriptions
// [x] Must store the array of ugly thing objects in the Context store
// [x] Must be able to delete an ugly thing
// [x] Must be able to edit an ugly thing
// [x] Must make all requests via the [Ugly Things API](https://coursework.vschool.io/ugly-things-api-documentation/)

// ## Note

// Only the array of ugly things, and functions for manipulating it, needs to be managed in context