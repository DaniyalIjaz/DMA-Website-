import React from 'react'
import './Error.css'
import {NavLink} from "react-router-dom"

export default function Error() {
  return (
    <>
      
      
    <div className='error-body'>

        <div className="error-container">
          <h2>Oops! Page not found.</h2>
          <h1>404</h1>
          <p>We can't find the page you're looking for.</p>
          <NavLink to="/">Go back home</NavLink>
        </div>
    </div>
      
    
      </>
  )
}









