import React from 'react'
import AuthForm from './AuthForm'
import { UserContext } from './context/UserProvider'


export default function Auth(){
const {signup,login, resetAuthErr, errMsg} = React.useContext(UserContext)

//state for input data from login form
const initInputs = {username: '', password: ''}
const [inputs,setInput] = React.useState(initInputs)

//state for already member toggle
const [toggle,setToggle] = React.useState(false) 

//make inputs controlled by react 
function handleChange(e){
    const {name, value} = e.target 
    setInput(prevInputs => ({
        ...prevInputs,
        [name] : value
    }))
}


//signup
function handleSignup(e){
    e.preventDefault()
    signup(inputs)
}

//login
function handleLogin(e){
e.preventDefault()
login(inputs)
}

//toggle
function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
}


return(
<div className='auth-container'>
    <h1 className='title'>IssueMinder</h1>
    {!toggle ?
    <>
    <AuthForm
    handleChange={handleChange}
    handleSubmit={handleSignup}
    inputs={inputs}
    btnTxt = "Sign Up"
    errMsg={errMsg}
    />
    <h4 onClick={toggleForm} className='member'>Already A Member ?</h4>
    </>
    :
    <>
    <AuthForm
    handleChange={handleChange}
    handleSubmit={handleLogin}
    inputs={inputs}
    btnTxt = "Login"
    errMsg={validationErr}
    />
    <h4 onClick={toggleForm}  className='member'> Not a Member ?</h4>
    </>
    }
</div>
)
}