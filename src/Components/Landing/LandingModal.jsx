import React, { useState, useEffect } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'


const LandingModal = (props) => {

   const {
      projectData,
      projectCollectionRef, 
      setProjectData,
      setModalView,
      modalView
   } = props

   
      

   const [input, setInput] = useState('')
   const [data, setData] = useState(projectData)

   useEffect(() => {
      const getProjects = async () => {
         const updateData = await getDocs(projectCollectionRef);
         setProjectData(updateData.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      }
      getProjects()
      setData(projectData)
   },[projectData]);

   const createProject = async () => {
      const getProjects = async () => {
         const updateData = await getDocs(projectCollectionRef);
         setProjectData(updateData.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      }
      getProjects();
      let key = input
      let cityRef = doc(db, 'projects', 'Ds7godBN1F9zeg7rpWyg') 
      setDoc(cityRef,   {[key]: {id: 1, issues: {}} }, { merge: true })
      setInput('')
      return setData([projectData]), console.log('data test:', data)
   };

   if(modalView == false){
         return null
      }

   return (
      <div className="landing-modal-container">
         <div className="landing-modal-content">
            <div className="landing-modal-header">
               <h4>Enter new project name</h4>
            </div>
            <div className="landing-modal-body">
               <form onSubmit={createProject}>
                  <input 
                     type="text"
                     placeholder='Enter project name...'
                     value={input}
                     onChange={(e) => {setInput(e.target.value)}}
                  />
               </form>
            </div>
            <div className="landing-modal-footer">
               <button onClick={createProject}>Create</button>
               <button onClick={() => {setModalView(false)}}>Close</button>
            </div>
         </div>   
      </div>
   )
}

export default LandingModal
