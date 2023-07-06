import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'


export default function ProtectedRoute(props){
    const {token, children, redirectTo} = props 
    //component is used as a dynamic way of applying to all components needed via props.children
    return token ? children : <Navigate to={redirectTo}/>//<Component/> replaced with children bc now we are using props.children 
    //navigate is used to redirect user to a different path in this case to the login 
}

{/* <ProtectedRoute>
    <Component/>//gives access to props.children
</ProtectedRoute> */}