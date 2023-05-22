import React from "react"
import './App.css'
import SmallTime from "./SmallTime.jsx"
import Party from "./Party"
import Professional from "./Professional"
import BigTime from "./BigTime"
import night from "./assets/night.mp3"
import Greats from "./Greats"

function App() {
// setting state and variables

  const [djSquare, setDjSquare] = React.useState(["white","white","white","white"])


  //map into array
  const squareBoxes = djSquare.map((box, index)=>(<div key={index} className="boxes" style = {{backgroundColor:box}} ></div>))

  //smallTimeDj
  function smallTimeDj(){
  
  setDjSquare(prevColor=> prevColor.map(color=> color === "white" ? "black" : "white"))

  }

// Party DJ:Add a second button. The second will turn the top half (both squares) of the grid purple.
function partyDj(){
  setDjSquare(prevColor => prevColor.map((color,index)=>  index < 2  ? "purple" : color))
}

// Professional DJ: Add two more buttons, for a total of four. These next two will change the colors of the bottom squares blue,
//  but individually. One will be linked to the bottom left, and the other to the bottom right.

function ProDjLeftbtm(){
  setDjSquare(prevColor => prevColor.map((color,index)=>  index === 2  ? "blue" : color))
}
//bottom right
function ProDjrightbtm(){
  setDjSquare(prevColor => prevColor.map((color,index)=>  index === 3  ? "blue" : color))
}

// Big Time DJ:Your next four buttons will each be linked to one of the squares. These buttons can have any effect on 
// those squares that you wish.

//index 0 top left 
function bigTimeDj0(){
  setDjSquare(prevColor => prevColor.map((color,index)=>  index === 0  ? "red" : color))
}  
//index 1 top right
function bigTimeDj1(){
  setDjSquare(prevColor => prevColor.map((color,index)=>  index === 1 ? "yellow" : color))
}  
//index 2 bottom left 
function bigTimeDj2(){
  setDjSquare(prevColor => prevColor.map((color,index)=>  index === 2  ? "hotpink" : color))
}  
//index 3 bottom right
function bigTimeDj3(){
  setDjSquare(prevColor => prevColor.map((color,index)=>  index === 3  ? "green" : color))
}  

//audio
// const [isPlaying, setIsPlaying] = React.useState(false)

const audio = new Audio(night);
function audioPlay(){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
}

  return (
    <div className="App">
      <h1> DJ React </h1>
      <div className='squareBox'>
          {squareBoxes}
      </div>
        <SmallTime  handleClick= {smallTimeDj} />
        <Party handleClick ={partyDj} />
        <Professional handleClick = {ProDjLeftbtm} handleClick1={ProDjrightbtm}/>
        <BigTime 
          handleClick1= {bigTimeDj0}
          handleClick2= {bigTimeDj1}
          handleClick3= {bigTimeDj2}
          handleClick4= {bigTimeDj3}
        />
        <Greats onClick1={audioPlay} />
    </div>
  )
}

export default App

