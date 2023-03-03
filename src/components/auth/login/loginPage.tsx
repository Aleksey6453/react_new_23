import React from 'react'
import {TextField, Button, Typography} from '@mui/material'
import { IPropsLogin } from '../../../common/types/auth'


const LoginPage:React.FC<IPropsLogin> = (props:IPropsLogin): JSX.Element => {

  const {setPassword, setEmail} = props
  
  return (
    <>
      <Typography variant="h3">
        Authorization
      </Typography>
      <Typography variant="body1" marginBottom={2}>
        Enter email and password please
      </Typography>
      <TextField fullWidth={true} onChange={(e)=>{setEmail(e.target.value)}} sx={{marginTop:'10px'}} label="Email" variant="outlined" placeholder='Enter your email'/>
      <TextField type='password' onChange={(e)=>{setPassword(e.target.value)}} fullWidth={true} sx={{marginTop:'10px'}} label="Password" variant="outlined" placeholder='Enter your password'/>
      <Button type='submit' sx={{marginTop:'15px', width: '50%', padding: '15px'}} variant="contained">Enter</Button>
      <Typography variant="body1" sx={{marginTop:'10px'}}>
       Dont have an account? <span className='incitingText'>Registrations!</span>
      </Typography>
    </>
  )
}

export default LoginPage
