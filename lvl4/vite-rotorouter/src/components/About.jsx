import React from "react"
import { useNavigate } from "react-router-dom"

export default function About(){
    const navigate = useNavigate()
    return(
        <div className="aboutDiv">
            <h2 className="aboutTitle">About Us</h2>
            <p className="aboutP"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus asperiores numquam sed deleniti quis aliquam nulla amet saepe, 
                ex sequi iste fuga debitis libero. Magnam quas et possimus sint doloremque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti laboriosam 
                porro nam. Libero, nemo impedit fugiat esse laboriosam vitae iure eos qui recusandae 
                expedita, necessitatibus quos iusto? Quas, reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus asperiores numquam sed deleniti quis aliquam nulla amet saepe, 
                ex sequi iste fuga debitis libero. Magnam quas et possimus sint doloremque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti laboriosam 
                porro nam. Libero, nemo impedit fugiat esse laboriosam vitae iure eos qui recusandae 
                expedita, necessitatibus quos iusto? Quas, reprehenderit.
            </p>
            <footer className="aboutFooter">
                <button className="aboutBtn1" onClick={()=> navigate('/')}>Go to Home</button>
                <button className="aboutBtn2" onClick={()=> navigate(1)}>Next 1</button>
                <button className="aboutBtn3" onClick={()=> navigate(-1)}>Back 1</button>
            </footer>
        </div>
    )
}