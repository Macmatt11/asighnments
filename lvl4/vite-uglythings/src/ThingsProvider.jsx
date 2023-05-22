import React from "react"
import axios from 'axios'
//create context to send all data to every component when needed 
const ThingsContext = React.createContext()


function ThingsProvider(props){
//formData state 
const [formData,setFormData] = React.useState({
    title: '',
    description: '',
    imgUrl: ''
})
console.log(formData)

//set api state as an array to save data after get request 
const [apiData,setApiData] = React.useState([])

//with use effect get api data through api get request 
    React.useEffect(()=>{
    axios.get('https://api.vschool.io/mathewmacias/thing')
    .then(response => setApiData(response.data))
},[])
console.log(apiData)

//onchange function
function handleChange(event){
    const {name,value} = event.target
    setFormData(prevData =>({
    ...prevData,
    [name] : value
    }))
}

//submit function that when submitted adds a post to api
function handleSubmit(event) {
    event.preventDefault()
    axios.post('https://api.vschool.io/mathewmacias/thing',formData)
    .then(response => {
        setApiData([...apiData,response.data])
        setFormData({
        title: '',
        description: '',
        imgUrl: ''
        })
        get()
    })
}

function get(){
    axios.get('https://api.vschool.io/mathewmacias/thing')
    .then(response => setApiData(response.data))
}
    return(
        <ThingsContext.Provider value={{
            formData: formData,
            apiData: apiData,
            setFormData: setFormData,
            setApiData: setApiData,
            handleChange:handleChange,
            handleSubmit:handleSubmit
        }}>

        {props.children}

        </ThingsContext.Provider>
    )
}

export {ThingsContext,ThingsProvider}