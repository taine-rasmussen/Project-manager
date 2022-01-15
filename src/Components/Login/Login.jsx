import React, { useState } from 'react'
import './Login.css'

//Components
import ExistingUser from './ExistingUser'
import NewUser from './NewUser'

const Login = () => {
   return (
      <div className="login-container">
         <NewUser />
      </div>
   )
}
export default Login;