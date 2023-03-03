import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoginPage from './login/loginPage'
import RegisterPage from './register/register'
import './style.css'
import { Box } from '@mui/material';

const AuthRootComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()

  const handleSubmit = async (e: {preventDefault:()=>void}) => {
      e.preventDefault()
  } 

  return(
    <div className='root'>
      <form className="form" onSubmit={handleSubmit}>
        <Box 
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={4}
          borderRadius={5}
          bgcolor='#F0F7FF'
          color='#A0A0A0'
          border='2px solid #A0A0A0'
        >
          {location.pathname === '/login' ? <LoginPage setEmail={setEmail} setPassword={setPassword} /> : location.pathname === '/register' ? <RegisterPage /> : null}
        </Box>
      </form>
    </div>
  )
  
}

export default AuthRootComponent
