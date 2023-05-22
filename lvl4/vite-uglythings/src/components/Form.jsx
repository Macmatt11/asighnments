import React from "react"
import { ThingsContext } from "../ThingsProvider"
import axios from "axios"


export default function Form(props){
const {formData,handleChange,handleSubmit} = React.useContext(ThingsContext)


    return(
        <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <input className="formInput" type='text' name='title' placeholder="Title" value={formData.title} onChange={handleChange}/>
                <input className="formInput" type='text' name='description' placeholder="description" value={formData.description} onChange={handleChange}/>
                <input className="formInput" type='url' name='imgUrl' placeholder="imgUrl" value={formData.imgUrl} onChange={handleChange}/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}