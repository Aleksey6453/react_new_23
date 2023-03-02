import React from 'react'
import {TextField, Button, Typography} from '@mui/material'

const LoginPage = () => {

  
  return (
    <>
      <Typography variant="h3">
        Authorization
      </Typography>
      <Typography variant="body1" marginBottom={2}>
        Enter email and password please
      </Typography>
      <TextField fullWidth={true} sx={{marginTop:'10px'}} label="Email" variant="outlined" placeholder='Enter your email'/>
      <TextField type='password' fullWidth={true} sx={{marginTop:'10px'}} label="Password" variant="outlined" placeholder='Enter your password'/>
      <Button sx={{marginTop:'15px', width: '50%', padding: '15px'}} variant="contained">Enter</Button>
      <Typography variant="body1" sx={{marginTop:'10px'}}>
       Dont have an account? <span className='incitingText'>Registrations!</span>
      </Typography>
    </>
  )
}

export default LoginPage
