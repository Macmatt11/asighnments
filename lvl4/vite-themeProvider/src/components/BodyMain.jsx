import React from "react";
import { ThemeContext } from "../ThemeProvider";


export default function BodyMain(props){

    const {theme,handleToggle} = React.useContext(ThemeContext)
    return(
        <div id="bodyMainDiv" className={`${theme}Mode`}>
            <h1>Theme Changer</h1>
            <button onClick={handleToggle}>Toggle Theme</button>
            <h1>You are in {theme} Mode</h1>
        </div>
    )
}