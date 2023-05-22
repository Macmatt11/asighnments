import React from "react";

export default function Navbar(){
    return (
        <nav>
            <div className= "titleContainer">
                <h1 className = "startTitle"> <a>Start BootStrap</a></h1>
            </div>
            <ul className="ulNav">
                <li className="Home"><a >Home</a></li>
                <li className="about"><a href='https://startbootstrap.github.io/startbootstrap-clean-blog/about.html'>About</a></li>
                <li className="sample"><a href='https://startbootstrap.github.io/startbootstrap-clean-blog/contact.html'>Sample Post</a></li>
                <li className="contact"><a href='https://startbootstrap.github.io/startbootstrap-clean-blog/contact.html'>Contact</a></li>
            </ul>
        </nav>
    )
}