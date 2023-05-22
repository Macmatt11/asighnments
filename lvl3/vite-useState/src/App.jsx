
import React from "react"
import './App.css'
import Practice from './Practice'

function App() {
   // 1. Pass in a new color of your choosing in place of the old one. 
    // Hint: we don’t care what the previous color was.
    // const [color, setColor] = React.useState("pink")

    // setColor("yellow")
    // console.log(color)

    // 2.Toggle between the colors pink and blue. If the current color is pink, 
    // we want to set it to blue. If it’s currently blue, set it back to pink.
  // function toggleColor(){
  //   setColor(prevColor => {
  //     if(prevColor === "pink"){
  //       return  "blue"
  //     }else {
  //       return 'pink'
  //     }
  //   })
  // }

  // or setColor(prevColor => prevColor === "pink" ? "blue" : "pink")

  // console.log(color)

  // 3.Add a new person object to the following people array in state. You can 
  // hard-code a new object but it must be a person object with firstName and lastName properties
  
  // const [people, setPeople] = React.useState([
  //   {
  //     firstName: "John",
  //     lastName: "Smith"
  //   }
  // ])
  // const peopleElement = people.map(person => <p key={person}>{person.firstName} {person.lastName}</p>);

  // function addPerson(){
  // setPeople(prevArray => {
  //   return [...prevArray,{firstName: 'Mathew', lastName:'Macias'}]
  //   })
  // }

  //4. Change the following state-setting functions to use an implicit return
//   const [colors, setColors] = React.useState(["pink", "blue"])

// setColors(prevColors =>[...prevColors, "green"])
  
// console.log(colors)

//b
// const [countObject, setCountObject] = React.useState({
// 	count: 0
// })

// // implicit return 
//setCountObject(prevState=> ({count: prevState.count + 1}))

// console.log(countObject)

//5. Update the following state to add an additional property 
//age and set the value to 30, ensuring that the other properties are not overwritten.

// const [person, setPerson] = React.useState({
//   firstName: "John",
//   lastName: "Smith"
// })

//   setPerson( prevPerson =>({
//     ...prevPerson, 
//     age: 30
//   }))

// console.log(person)

//6What’s wrong with the following state update?

const [colors, setColors] = React.useState(["pink", "blue"])

setColors(prevColors => [...prevColors,"green"])

console.log(colors)

    return(

        <div>
            <div className='divBox' onClick={addAge}>
              {/* <h1>{colors}</h1> */}
              {/* {peopleElement} */}
            </div>
        </div>
    )

}

export default App
