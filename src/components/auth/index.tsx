import React from 'react'
import { useLocation } from 'react-router-dom'
import LoginPage from './login/loginPage'
import RegisterPage from './register/register'
import './style.css'
import { Box } from '@mui/material';

const AuthRootComponent = () => {
  const location = useLocation()
  return(
    <div className='root'>
      <div className="form">
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
          {location.pathname === '/login' ? <LoginPage /> : location.pathname === '/register' ? <RegisterPage /> : null}
        </Box>
      </div>
    </div>
  )
  
}

export default AuthRootComponent
