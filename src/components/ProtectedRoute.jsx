import React from 'react'
import { Navigate } from 'react-router'
import { UserAuth } from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth();
    if(!user){
        return <Navigate to="/" />
    } else{
        return children;
    }
}

export default ProtectedRoute