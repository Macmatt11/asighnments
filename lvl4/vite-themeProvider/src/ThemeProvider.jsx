import React from "react"

//need the use context 
const ThemeContext = React.createContext()

function ThemeProvider(props){   
    //set state for theme for mainbody
    const [theme, setTheme] = React.useState("light")
    const [theme2,setTheme2] = React.useState("light2")

    //create a function to toggle the themes 
    function toggle(){
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
        setTheme2(prevTheme=> prevTheme === "light2" ? "dark2" : "light2")
    }
    return(
        <ThemeContext.Provider value={{
            theme: theme,
            theme2: theme2,
            handleToggle: toggle 
        }}> 
            {props.children}

        </ThemeContext.Provider>
    )
}
//eporting both the themeContext(useContext) and the function ThemeProvider 
export {ThemeContext,ThemeProvider}