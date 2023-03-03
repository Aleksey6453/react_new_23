import React from 'react'
import {TextField, Button, Typography} from '@mui/material'

const LoginPage = (props: any) => {

  const {setPassword, setEmail} = props
  
  return (
<<<<<<< HEAD
    <div>
      <h1 className={styles.color}>Fucking login Page</h1>  
    </div>
=======
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
>>>>>>> test27
  )
}

export default LoginPage
