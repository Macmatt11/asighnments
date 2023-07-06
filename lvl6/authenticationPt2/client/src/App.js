import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './components/context/UserProvider.js'
export default function App(){
  const {token, logout} = useContext(UserContext)
  return (
    <div className="app">
      <Navbar logout={logout}/>
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to='/profile'/> : <Auth/>}
          //if theres a token then navigate to profile if not navigate to login
        />
        <Route 
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
      </Routes>
    </div>
  )
}