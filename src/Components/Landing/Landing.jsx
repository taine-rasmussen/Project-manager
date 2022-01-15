import React, { useState } from 'react'
import './Landing.css'
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../../firebase-config'
import { Link } from 'react-router-dom'


const Landing = () => {

   const [user, setUser] = useState({});
   const userAuth = getAuth();
   const activeUser = userAuth.currentUser;

   const logout = async () => {
      await signOut(auth);
   };

   return (
      <div className="landing-container">
         <div className="landing-card-container">
            <div className="landing-header">
               <h1>Select a Project</h1> 
            </div>
            <div className="landing-card">
               <Link to='/login'>
                  <button onClick={logout}>Sign Out</button>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Landing
