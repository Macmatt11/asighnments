import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()

    return(
        <div className="homeDiv">
            <div className="welcome">
                <h2 className="welcomeTitle"> Welcome to Roto Router</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque libero molestias odit, 
                sunt quis temporibus inventore! Totam itaque odit quo iure debitis quidem minus maiores 
                eaque, quisquam voluptas laudantium dolorum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque libero molestias odit, 
                sunt quis temporibus inventore! Totam itaque odit quo iure debitis quidem minus maiores 
                eaque, quisquam voluptas laudantium dolorum.orem ipsum, dolor sit amet consectetur adipisicing elit. Neque libero molestias odit, 
                sunt quis temporibus inventore! Totam itaque odit quo iure debitis quidem minus maiores 
                eaque, quisquam voluptas laudantium dolorum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque libero molestias odit, 
                sunt quis temporibus inventore! Totam itaque odit quo iure debitis quidem minus maiores 
                eaque, quisquam voluptas laudantium dolorum.</p>
            </div>
            <div className="mission">
                <h2>Our Mission</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque libero molestias odit, 
                sunt quis temporibus inventore! Totam itaque odit quo iure debitis quidem minus maiores 
                eaque, quisquam voluptas laudantium dolorum.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque libero molestias odit, 
                sunt quis temporibus inventore! Totam itaque odit quo iure debitis quidem minus maiores 
                eaque, quisquam voluptas laudantium dolorum.</p>
            </div>
            <div className="values">
                <h2>Values</h2>
                <ul>
                    <li>
                        <h3>Honor</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <h3>Respect</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <h3>Integrity</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </div>
            <footer className="footerHome">
            <button onClick={()=> navigate('/products')} className="homeButtons" id="goTo">Products Page</button>
            <button onClick={()=> navigate(1)}className="homeButtons" id="next">Next 1</button>
            <button onClick={()=> navigate(1)} className="homeButtons" id="back">Back 1</button>
            </footer>
            
        </div>
    )
}