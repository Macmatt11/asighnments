import React from "react"
import { ThemeContext } from "../ThemeProvider";

export default function Footer(){
    const {theme} = React.useContext(ThemeContext)
    return(
        <div id="footer" className= {`${theme}Mode`}>
            <h1>Footer Theme</h1>
        </div>
        
    )
}