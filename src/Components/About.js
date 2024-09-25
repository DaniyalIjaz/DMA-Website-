import React from 'react'
import './About.css'
import {NavLink} from "react-router-dom"
import Footer from './Footer'
import CEOmessage from './CEOmessage'
import OurMission from './OurMission'
import Clients from './Clients'
import Work from './Work'
import Whatmakesusdifferent from './Whatmakesusdifferent'


const About = () => {
  return (
    <>
    
    
    <div className=" pt-5 my-5 ">
    <h1 className="display-4 mb-4 fw-bold text-body-emphasis text-center">Design Man Associates</h1>
    <div className="col-lg-8 mx-auto text-center pb-4">
      <p className="About-p lead mb-3" style={{fontSize:'16px'}}>Design Man Associates is lead, run and managed by a team of experienced professionals from various specialized disciplines.</p>
      <p className="About-p lead mb-3" style={{fontSize:'16px'}}>Design Man Associates is committed to rendering state-of-the-art consultancy services in the fields of architecture, engineering, construction and allied disciplines.
</p>
      <p className="About-p lead mb-4" style={{fontSize:'16px'}}>Operating in a professional environment and organized on modern lines, the company is committed to providing high quality services employing current state of knowledge and contemporary practices.</p>
      
      
    </div>

    <CEOmessage/>
      <OurMission/>
      <Clients/>
      <Work/>
      <Whatmakesusdifferent/>



      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 about-btn">
      <NavLink to="/">Go back home</NavLink>
        
      </div>
  </div>

      <Footer/>
    
    </>
  )
}
export default About