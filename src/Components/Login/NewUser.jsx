import React, { useState } from 'react'
import { auth } from '../../firebase-config'
import { Navigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";

const NewUser = ({setView}) => {

   const [registerEmail, setRegisterEmail] = useState('');
   const [registerPassword, setRegisterPassword] = useState('');
   const [name, setName] = useState("");
   const [user, setUser] = useState({});

   onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   });

    const handleViewChange = () => {
      setView(true)
   }

   const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
         updateProfile(auth.currentUser, {
         displayName: name
      })
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
                  <h1>Create new account</h1>
               </div>
               <form className='user-form'> 
                  <input 
                     type="text"
                     placeholder='Name...'
                     onChange={(e) => {setName(e.target.value)}}
                  />
                  <input 
                     type="email"
                     placeholder='Email...'
                     onChange={(e) => {setRegisterEmail(e.target.value)}}
                  />
                  <input 
                     type="password"
                     placeholder='Create passowrd...'
                     onChange={(e) => {setRegisterPassword(e.target.value)}}
                  />
                  <button onClick={register}>Create account</button>
               </form>
               <div className="form-footer">
                  <p>Already have an account? <span onClick={handleViewChange}>sign in</span></p>
               </div>
            </div>
         </div>
      </>
   )
}

export default NewUser
