import React from "react"
import { useNavigate } from "react-router-dom"

export default function Services(){
const navigate = useNavigate()

    return(
    <div className="serviceDiv">
        <h2 className="serveTitle">Services Include</h2>
        <ul className="serviceUl">
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </li>
        </ul>
        <ul className="serviceU2">
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </li>
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </li>
        </ul>
        <footer className="serveFooter">
            <button onClick={()=> navigate('/')}>Go to Home</button>
            <button onClick={()=> navigate(1)}>Next 1</button>
            <button onClick={()=> navigate(-1)}>Back 1</button>
        </footer>
    
    </div>
    )
}