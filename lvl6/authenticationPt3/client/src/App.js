import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider.js'
import ProtectedRoute from './components/ProtectedRoute.js'


export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
    {token && <Navbar logout={logout}/>}
      <Routes>
        <Route 
          path="/" 
          element={ token ? <Navigate to="/profile"/> : <Auth />}
        />
        <Route 
          path="/profile"
          element={//since we are using children closing tag needed 
          <ProtectedRoute token={token} redirectTo='/'>
            <Profile/>  
          </ProtectedRoute>
        }
        // profile/public will not be rendered unless user is logged in
        />
        <Route 
          path="/public"
          element={
            <ProtectedRoute token={token} redirectTo='/'>
            <Public/>  
          </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}
//if we want to specify different endpoints to redirect user to 