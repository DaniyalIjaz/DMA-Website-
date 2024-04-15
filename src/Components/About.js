import React from 'react'
import './About.css'
import {NavLink} from "react-router-dom"
import Footer from './Footer'


const About = () => {
  return (
    <>
    
    
    <div className="px-5 pt-5 my-5 text-center">
    <h1 className="display-4 mb-4 fw-bold text-body-emphasis">Design Main Associates</h1>
    <div className="col-lg-8 mx-auto">
      <p className="About-p lead mb-3">Design Man Associates is lead, run and managed by a team of experienced professionals from various specialized disciplines.</p>
      <p className="About-p lead mb-3">Design Man Associates is committed to rendering state-of-the-art consultancy services in the fields of architecture, engineering, construction and allied disciplines.
</p>
      <p className="About-p lead mb-4">Operating in a professional environment and organized on modern lines, the company is committed to providing high quality services employing current state of knowledge and contemporary practices.</p>
      
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 about-btn">
      <NavLink to="/">Go back home</NavLink>
        
      </div>
    </div>
    <div classNameName="overflow-hidden about-sec" >
      <div className="container ">
        <img src="./image/About.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="1400" height="1000" loading="lazy"/>
      </div>
    </div>
  </div>

      <Footer/>
    
    </>
  )
}
export default About