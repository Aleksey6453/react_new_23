import React from 'react'
import { useLocation } from 'react-router-dom'
import LoginPage from './login/loginPage'
import RegisterPage from './register/register'

const AuthRootComponent = () => {
  const location = useLocation()
  return (location.pathname === '/login' ? <LoginPage /> : location.pathname === '/register' ? <RegisterPage /> : null) 
}

export default AuthRootComponent
