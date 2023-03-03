import React from 'react'
import {TextField, Button, Typography} from '@mui/material'


const RegisterPage = () => {
  return (
    <>
      <Typography variant="h3">
        Registration
      </Typography>
      <Typography variant="body1" marginBottom={2}>
        Enter your data for registrations please
      </Typography>
      <TextField fullWidth={true} sx={{marginTop:'10px'}} label="Name" variant="outlined" placeholder='Enter your name'/>
      <TextField fullWidth={true} sx={{marginTop:'10px'}} label="Username" variant="outlined" placeholder='Enter your username'/>
      <TextField fullWidth={true} sx={{marginTop:'10px'}} label="Email" variant="outlined" placeholder='Enter your email'/>
      <TextField type='password' fullWidth={true} sx={{marginTop:'10px'}} label="Password" variant="outlined" placeholder='Enter your password'/>
      <TextField type='password' fullWidth={true} sx={{marginTop:'10px'}} label="Password" variant="outlined" placeholder='Repeate your password'/>
      <Button sx={{marginTop:'15px', width: '50%', padding: '15px'}} variant="contained">Registration</Button>
      <Typography variant="body1" sx={{marginTop:'10px'}}>
       Do you already have an account? <span className='incitingText'>Autorization!</span>
      </Typography>
    </>
  )
}

export default RegisterPage
