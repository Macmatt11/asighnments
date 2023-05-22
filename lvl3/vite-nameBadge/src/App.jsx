import React from 'react'
import './App.css'
import Form from './Form'

function App() {
//create the initial state for the form that stores the data on change 
// formData, setFormData is = to react.ustate(an object with the props we nee like name=name,value=value etc)
const [formData, setFormData] = React.useState({
  firstName: "",
  lastName: "",
  birthPlace: "",
  superPower: "",
  email:"",
  phoneNumber: "",
  comments:""

})

// console.log(formData)
//set state to store all badges into an array 
const [formBadge, setFormBadge] = React.useState([])


//function for saving live data 

function handleChange(event){
const {name,value} = event.target
setFormData(prevFormData => ({
  ...prevFormData,
  [name] : value

}))
}

function handleSubmit(event){
event.preventDefault()
setFormBadge([...formBadge,formData])
setFormData({
  firstName: "",
  lastName: "",
  birthPlace: "",
  superPower: "",
  email:"",
  phoneNumber: "",
  comments:""
});
}

function handleClear(){
  setFormBadge([]);
}


//four text type inputs for: firstname, lastname, birth place, and fav food. one email type input and one phone number type 
// a trxt area is needed 
//a submit button with a submit function 
  //the submit function needs to display the badge in the dom with a all of the data inside 
  //after submitted the fields will clear 

  //components 
  //badge 
  return (
    <div className="App">
      <h1>Name Badge Generator: <span>Super Hero Edition</span></h1>
      <Form
        key={formData.index}
        item={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formBadge={formBadge}
        handleClick={handleClear}
      />
      
    
    </div>
  )
}

export default App
