import React from 'react'
import './ProjectDetails.css'

const ProjectDetails = (props) => {
  return (
    <>
    <div className="proDetails">
        <h4>{props.h4}</h4>
        <p>{props.p}</p>
      </div>
      
    </>
  )
}

export default ProjectDetails
