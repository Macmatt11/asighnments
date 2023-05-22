import React from 'react'
import './App.css'
import ColorBoxes from './ColorBoxes'

function App() {
const [formData, setFormData] = React.useState({
  colorOne:"#fafafa",
  colorTwo:"#1a1919",
  angle: 50
})

function handleChange(event){
  const {name,value} = event.target
  setFormData(prevColor=>({
    ...prevColor,
    [name] : value
  }))
}

const showColorGradient =  `background: linear-gradient(${formData.angle}deg, ${formData.colorOne} , ${formData.colorTwo}); 
-moz-background: linear-gradient(${formData.angle}deg, ${formData.colorOne} , ${formData.colorTwo}); 
-webkit: linear-gradient(${formData.angle}deg, ${formData.colorOne} , ${formData.colorTwo})`

const style={
  background: `linear-gradient(${formData.angle}deg, ${formData.colorOne} , ${formData.colorTwo})`,
  MozBackgroundImage: `linear-gradient(${formData.angle}deg, ${formData.colorOne} , ${formData.colorTwo})`,
  WebkitBackgroundImage: `linear-gradient(${formData.angle}deg, ${formData.colorOne} , ${formData.colorTwo})`
}
console.log(formData)
  return (
    <div className='appContainer'>
      <h1 className='mainTitle'>CSS Gradient Generator</h1>
      <ColorBoxes key={formData.id} >
        <div style={style} className='gradientBox'></div>
        <textarea readOnly value={showColorGradient}></textarea>
      </ColorBoxes>
      <form className='form'>
        <h1>Options:</h1>
        <span>Color 1:</span> <input type='color' name='colorOne' value={formData.colorOne} className='colorOne' onChange={handleChange}/>
        <span>Color 2:</span> <input type='color' name='colorTwo' value={formData.colorTwo} className='colorTwo' onChange={handleChange}/>
        <span>Angle:</span> <input type='number' name='angle' value={formData.angle} className='angle' onChange={handleChange}/>
      </form>
    </div>
  )
}

export default App
