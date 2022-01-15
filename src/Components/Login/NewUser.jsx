import React from 'react'

const NewUser = () => {
   return (
      <div className="newuser-container">
         <div className="newuser-form-container">
            <div className='newuser-header'>
               <h1>Create new account</h1>
            </div>
            <form className='newuser-form'> 
               <input 
                  type="text"
                  placeholder='Name'
               />
               <input 
                  type="email"
                  placeholder='Email'
               />
               <input 
                  type="password"
                  placeholder='Password'
               />
               <button>Create account</button>
            </form>
            <div className="form-footer">
               <p>Already have an account? <span>sign in</span></p>
            </div>
         </div>
      </div>
   )
}

export default NewUser
