import React from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = React.useState({ //formData is an object state with a fullname property
    fullName: ""
  })
  //formArray is an array that stores the form data, this is needed bc we can map over an object 
  //which is what formData is
  const [formArray, setFormArray] = React.useState([])//formarray is an empty array bc we need to push the 
  //formdata and and the input data which is formdata.fullname

console.log(formData)

  function handleChange(event){ //occurs whenever there is change in the input 
    const {name,value} = event.target // targets elements with a name and value prop
    setFormData(prevData =>({
      ...prevData, // uses previous data 
      [name] : value // using the key of name and getting its value 
      
    }))
  }
  
  function handleSubmit(event){//function runs when submit is pressed 
    event.preventDefault()
    setFormArray([...formArray,formData.fullName])//uses the empty formArray state and pushes the formData.fullname into it
    setFormData({fullName: ""}) //this empties the input box after the data has been submitted 
  }


  const listItems = formArray.map((input, index) => (
    <li key={index}>{input}</li>
  ))

  function handleClear(){
    setFormArray([]);
  }

  return (
    <div className="App">
      <h1 className='title'>Name Entry</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
            type="text" 
            placeholder="Full Name"
            className="form--input"
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
        />
        <h1 id = "h1">
        {formData.fullName}
        </h1>
        <button>Submit</button>
        <button type='button' onClick={handleClear}>Clear</button>
        <ol>
          {listItems}
        </ol>
      </form>
    </div>
  )
}

export default App
