import React from "react"
import { ThemeContext } from "../ThemeProvider";

export default function Navbar(){
    const {theme} = React.useContext(ThemeContext)
    return(
        <div id="navbarDiv" className={`${theme}Mode`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}