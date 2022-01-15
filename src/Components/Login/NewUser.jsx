import React from 'react'

const NewUser = ({setView}) => {

 const handleViewChange = () => {
      setView(true)
   }

   return (
      <div className="user-container">
         <div className="user-form-container">
            <div className='user-header'>
               <h1>Create new account</h1>
            </div>
            <form className='user-form'> 
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
               <p>Already have an account? <span onClick={handleViewChange}>sign in</span></p>
            </div>
         </div>
      </div>
   )
}

export default NewUser
