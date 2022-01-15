import React, { useState } from 'react'
import { auth } from '../../firebase-config'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const ExistingUser = ({setView}) => {

   const [loginEmail, setLoginEmail] = useState("");
   const [loginPassword, setLoginPassword] = useState("");
   const [user, setUser] = useState({});

   onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   });

   const handleViewChange = () => {
      setView(false)
   }

   const login = async () => {
      try {
         const user = await signInWithEmailAndPassword(
         auth,
         loginEmail,
         loginPassword
         );
         console.log(user);
      } catch (error) {
         console.log(error.message);
      }
   };

   return (
      <>
         {user?.displayName ? <Navigate to="/dashboard" /> : null}
         <div className="user-container">
            <div className="user-form-container">
               <div className='user-header'>
                  <h1>Welcome back</h1>
               </div>
               <form className='user-form'> 
                  <input 
                     type="email"
                     placeholder='Email'
                     onChange={(e) => {setLoginEmail(e.target.value);}}
                  />
                  <input 
                     type="password"
                     placeholder='Password'
                     onChange={(e) => {setLoginPassword(e.target.value);}}
                  />
                  <button onClick={login}>Sign in</button>
               </form>
               <div className="form-footer">
                  <p>Don't have an account? <span onClick={handleViewChange}>create one</span></p>
               </div>
            </div>
         </div>
      </>
   )
}

export default ExistingUser
