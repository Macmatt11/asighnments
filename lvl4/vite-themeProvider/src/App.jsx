import React from 'react'
import './App.css'
import BodyMain from './components/BodyMain'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ThemeContext } from "./ThemeProvider";


function App() {
  const {theme2} = React.useContext(ThemeContext)

  return (
  
    <div id='appContainer' className={`${theme2}Mode`}>
      <Navbar/>
      <BodyMain/>
      <Footer/>
    </div>
  )
}

export default App

//todo:
//[x] make a navbar, main and footer component + import to app 
//[] create a context provider that changes the themes and encompass the app within the theme provider (in the render app portion)
//[] within the theme provider import usestate and usecontext, then set state 
//[] create a function within theme component that consists of the state and a toggle function
//[] style the app 



// Using what you have just learned about React Context, you are tasked with making a `ThemeProvider` context for a new application. 
//  Your goal is build a home page that offers a dark and a light theme.  This theme can be toggled by the user.

// This will be excellent practice in linking up the Provider and Consumer parts of Context around your app (getting used to the syntax) 
//while working on your CSS that corresponds with the different themes.

// ### You must:

// - Provide a Dark and a Light theme
// - Have at least 3 display components:
//     - ex: Navbar, Footer, Main
// - Create a `ThemeProvider` component that manages the themes using Context.
// - Wrap your context provider around the whole app, like so: