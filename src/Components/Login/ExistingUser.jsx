import React from 'react'

const ExistingUser = () => {
   return (
      <div>
         <div className="user-form-container">
            <div className='user-header'>
               <h1>Welcome back</h1>
            </div>
            <form className='user-form'> 
               <input 
                  type="email"
                  placeholder='Email'
               />
               <input 
                  type="password"
                  placeholder='Password'
               />
               <button>Sign in</button>
            </form>
            <div className="form-footer">
               <p>Don't have an account? <span>create one</span></p>
            </div>
         </div>
      </div>
   )
}

export default ExistingUser
