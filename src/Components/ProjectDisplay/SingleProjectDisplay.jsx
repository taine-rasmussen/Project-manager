import React from 'react'

const SingleProjectDisplay = ({singleProject, setSingleProject}) => {

   const returnToProjectSelect = () => {
      setSingleProject(null)
   }
   return (
      <div className="single-container">
         <h1>{singleProject.name}</h1>
         <button onClick={returnToProjectSelect}>home</button>
      </div>
   )
}

export default SingleProjectDisplay
