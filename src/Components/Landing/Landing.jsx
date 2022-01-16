import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../../firebase-config'
import { Link } from 'react-router-dom'
import { db } from '../../firebase-config'
import { collection, doc, getDocs } from 'firebase/firestore'
import './Landing.css'

// Components
import SingleProjectDisplay from '../ProjectDisplay/SingleProjectDisplay'
import CreateProject from './CreateProject'

const Landing = () => {

   const [user, setUser] = useState({});
   const [projectData, setProjectData] = useState([])
   const userAuth = getAuth();
   const activeUser = userAuth.currentUser;
   const [singleProject, setSingleProject] = useState(null)

   const projectCollectionRef = collection(db, 'projects')

   // Handles user sign out / Redriects users to login page
   const logout = async () => {
      await signOut(auth);
   };

   // returns data from db and updates state with it
   useEffect(() => { 
      const getProjects = async () => {
         const data = await getDocs(projectCollectionRef);
         setProjectData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      }
      getProjects();
   }, []);

   // Updates singleProj state with project data of project slected by user
   const updateSingleProjData = (id) => {
      let data = null
      projectData[0].projects.map((proj) => {
         if(proj.id === id){
            return data = proj
         }
      })
      setSingleProject(data)
   };

   return (
      <>
      { singleProject === null ? 
            <div className="landing-container">
               <div className="landing-card-container">
                  <div className="landing-header">
                     <h1>Select a Project</h1> 
                  </div>
                  <div className="landing-projects">
                     {projectData[0] ? projectData[0].projects.map((proj) => {
                        return(
                           <div className="landing-single-project" key={proj.id}>
                              <button onClick={() => {updateSingleProjData(proj.id)}}>{proj.name}</button>
                           </div>
                        )
                     }): 'loading...'}
                  </div>
                  <div className="landing-card">
                     <Link to='/login'>
                        <button onClick={logout}>Sign Out</button>
                     </Link>
                  </div>
               </div>
         </div> : <SingleProjectDisplay singleProject={singleProject} setSingleProject={setSingleProject}/> }
      </>
   )
}

export default Landing
