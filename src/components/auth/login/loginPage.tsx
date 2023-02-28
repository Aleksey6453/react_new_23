import React from 'react'
import Test from '../../Test'
import styles from './style.module.css'

const LoginPage = () => {
  const name = "Alexandro"
  const gnom = "Genomio"
  
  return (
    <div>
      <h1 className={styles.color}>Fucking login Page</h1>
      <Test gnom = {gnom}/>
    </div>
  )
}

export default LoginPage
