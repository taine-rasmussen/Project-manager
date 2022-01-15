import React, { useState } from 'react'
import './Login.css'

//Components
import ExistingUser from './ExistingUser'
import NewUser from './NewUser'

const Login = () => {

   const [view, setView] = useState(true)

   return (
      <div className="login-container">
         {view === true ? <ExistingUser setView={setView}/> : <NewUser setView={setView}/>}
      </div>
   )
}
export default Login;