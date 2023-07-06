import React ,{ useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Navbar from './components/NavBar'
import Auth from './components/Auth'
import { UserContext } from './components/context/UserProvider'
import Profile from './components/Profile'
import Public from './components/Public'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const {token, logout} = React.useContext(UserContext)
  return (
    <div className='app'>
    <Router>
    {token && <Navbar logout = {logout}/>}
      <Routes>
        <Route path='/' element = {token ? <Navigate to='/profile'/> : <Auth/>}/>
        <Route path='/profile' element= {
        <ProtectedRoutes token={token} redirectTo='/'>
          <Profile/>
        </ProtectedRoutes>
        }// profile/public will not be rendered unless user is logged in
        />   
        <Route path='/public' element= {
        <ProtectedRoutes token={token} redirectTo='/'>
          <Public/>
        </ProtectedRoutes>
        }/>
      </Routes>
      
    </Router>
      
    </div>
  )
}

export default App
