import React from "react"

export default function AuthForm(props){
    const {
    handleChange,
    handleSubmit,
    btnTxt,
    errMsg,
    inputs:{
        username,
        password
    }} = props

    return(
        <form onSubmit={handleSubmit} className="authForm">
            <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="Username"
            />
            <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            />
            <button>{btnTxt}</button>
            <p style={{color: 'red'}} className="errMsg">{errMsg}</p>
        </form>
    )
}