import React from 'react'
import { Link } from 'react-router-dom'
import {LuLogOut} from 'react-icons/lu'

export default function Navbar(props){
    const {logout} = props
    return(
        <div className='navbar'>
            {/* <Link to = "/" className='links'>Login</Link> */}
            <Link to = "/public" className='issueMinder'><h1>IssueMinder</h1></Link>
            <Link to = "/profile" className='links'>Profile</Link>
            <Link to = "/public" className='links'>Public</Link>
            <LuLogOut className = "logout-icon" onClick={logout}/>
        </div>
    )
}