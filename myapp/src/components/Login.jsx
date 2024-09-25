import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login page</h1>
          
              <input type="text" name='' id="" />
              <label htmlFor="">Name</label><br /><br />

              <input type="email" name='' id="" />
              <label htmlFor="">Gmail</label><br /><br />

              <input type="password" name="" id="" />
              <label htmlFor="">Password</label><br /><br />
          <Button variant='contained'>submit</Button>
        
      </div>
  )
}

export default Login
