import React, { useState, useEffect } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'



const CreateProject = ({ projectData, projectCollectionRef, setProjectData }) => {


   const [input, setInput] = useState('')
   const [data, setData] = useState(projectData)


  
   useEffect(() => {
      const getProjects = async () => {
         const updateData = await getDocs(projectCollectionRef);
         setProjectData(updateData.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      }
      getProjects()
      setData(projectData)
   },[projectData])

   const createProject = async () => {
      const getProjects = async () => {
         const updateData = await getDocs(projectCollectionRef);
         setProjectData(updateData.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      }
      getProjects();
      let key = input
      let cityRef = doc(db, 'projects', 'ANL0geHV9jmKh3ZBerDT') 
      setDoc(cityRef,   {[key]: {id: 1, issues: {}} }, { merge: true })
      return setData([projectData]), console.log('data test:', data)
   }

   // This currently works to create state with data to wrap projectData objects arround and array however it takes two clicks of the btn create to see te changes in state

   return (
      <div className="create-container">
         <form onSubmit={createProject}>
            <input 
               type="text"
               placeholder='Enter project name...'
               value={input}
               onChange={(e) => {setInput(e.target.value)}}
            />
            <button>Create</button>
         </form>
         
      </div>
   )
}

export default CreateProject

