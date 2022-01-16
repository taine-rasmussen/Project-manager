import React, { useState, useEffect } from 'react'
import './Landing.css'
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../../firebase-config'
import { Link } from 'react-router-dom'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'



const Landing = () => {

   const [user, setUser] = useState({});
   const [projectData, setProjectData] = useState([])
   const userAuth = getAuth();
   const activeUser = userAuth.currentUser;

   const logout = async () => {
      await signOut(auth);
   };

   const projectCollectionRef = collection(db, 'projects')

   useEffect(() => { 
      const getProjects = async () => {
         const data = await getDocs(projectCollectionRef);
         setProjectData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      }
      getProjects();
   }, []);

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
