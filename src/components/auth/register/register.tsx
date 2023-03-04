import React from 'react'
import {TextField, Button, Typography} from '@mui/material'
import { IPropsRegister } from '../../../common/types/auth'


const RegisterPage:React.FC<IPropsRegister> = (props:IPropsRegister): JSX.Element => {

  const {setPassword, setEmail, setRepeatPassword, setName, setUserName} = props

  return (
    <>
      <Typography variant="h3">
        Registration
      </Typography>
      <Typography variant="body1" marginBottom={2}>
        Enter your data for registrations please
      </Typography>
      <TextField fullWidth={true} sx={{marginTop:'10px'}} label="Name" variant="outlined" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
      <TextField fullWidth={true} sx={{marginTop:'10px'}} label="Username" variant="outlined" placeholder='Enter your username' onChange={(e)=>setUserName(e.target.value)}/>
      <TextField fullWidth={true} sx={{marginTop:'10px'}} label="Email" variant="outlined" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
      <TextField type='password' fullWidth={true} sx={{marginTop:'10px'}} label="Password" variant="outlined" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}/>
      <TextField type='password' fullWidth={true} sx={{marginTop:'10px'}} label="Password" variant="outlined" placeholder='Repeate your password' onChange={(e)=>setRepeatPassword(e.target.value)}/>
      <Button type='submit' sx={{marginTop:'15px', width: '50%', padding: '15px'}} variant="contained">Registration</Button>
      <Typography variant="body1" sx={{marginTop:'10px'}}>
       Do you already have an account? <span className='incitingText'>Autorization!</span>
      </Typography>
    </>
  )
}

export default RegisterPage
