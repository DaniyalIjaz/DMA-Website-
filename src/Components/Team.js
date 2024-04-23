import React from 'react'
import "./Team.css"
import {NavLink} from "react-router-dom"
import Footer from './Footer'


const Team = () => {
  return (
    <>

<section className="py-2 text-center container">
    <div className="row py-lg-2">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Meet Our Team</h1>
        <p className="lead text-body-secondary">Our team design customized construction plan to suit your requirement, budget, lifestyle and design preferences.</p>
        
      </div>
    </div>


    <div className="row pt-4">

    <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Fahad.jpeg" alt="Team Member" />
        <h4 className="fw-bold pt-3">Fahad Ijaz</h4>
        <h6 className="fw-bold display-7">C.E.O / Director</h6>
        <h6 className=" display-7">B.sc. Engg. (Civil)</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Hassan.jpeg" alt="Team Member" />
        <h4 className="fw-bold pt-3">Hassan Ijaz</h4>
        <h6 className="fw-bold display-7">Admin Manager</h6>
        <h6 className=" display-7">BBA</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/GM Baloch.jpeg" alt="Team Member" />
        <h4 className="fw-bold pt-3">Dr. G.M. Baloch</h4>
        <h6 className="fw-bold display-7">Principal Structural Engineer</h6>
        <h6 className=" display-7">Professional Engineer</h6>
        <h6 className=" display-7">PhD (Structural Conservation)</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Umair.jpeg" alt="Team Member" />
        <h4 className="fw-bold pt-3">M. Umair</h4>
        <h6 className="fw-bold display-7">Planning Engineer</h6>
        <h6 className=" display-7">B.sc. Engg. (Civil)</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Hamayon.jpg" alt="Team Member" />
        <h4 className="fw-bold pt-3">Mahmood Hamayon</h4>
        <h6 className="fw-bold display-7">Principal Architect</h6>
        <h6 className=" display-7">B. Arch.</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Zaman.jpg" alt="Team Member" />
        <h4 className="fw-bold pt-3">Zaman Ahmad</h4>
        <h6 className="fw-bold display-7">Architect</h6>
        <h6 className=" display-7">B. Arch.</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Hamza.jpeg" alt="Team Member" />
        <h4 className="fw-bold pt-3">Hamza Younas</h4>
        <h6 className="fw-bold display-7">Architect</h6>
        <h6 className=" display-7">B. Arch.</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Waheed.jpeg" alt="Team Member" />
        <h4 className="fw-bold pt-3">M. Waheed</h4>
        <h6 className="fw-bold display-7">Electrical Engineer</h6>
        <h6 className=" display-7">B.sc. Engg. (Electrical)</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Bilal.jpg" alt="Team Member" />
        <h4 className="fw-bold pt-3">M. Bilal Shahid</h4>
        <h6 className="fw-bold display-7">Draftman</h6>
        <h6 className=" display-7">DAE (Architecture)</h6>
      </div>
      
      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Farhan.jpeg" alt="Team Member" />
        <h4 className="fw-bold pt-3">M. Farhan</h4>
        <h6 className="fw-bold display-7">Site Supervisor</h6>
        <h6 className=" display-7">DAE (Civil)</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Imran.jpg" alt="Team Member" />
        <h4 className="fw-bold pt-3">M. Imran</h4>
        <h6 className="fw-bold display-7">Draftman</h6>
        <h6 className=" display-7">DAE (Civil)</h6>
      </div>

      <div className="memb col-lg-4 py-3">
        <img className="rounded-circle img-fluid " src="./image/Team/Daniyal.jpeg" alt="Team Member" />
        <h4 className="fw-bold pt-3">M. Daniyal Ijaz</h4>
        <h6 className="fw-bold display-7">Developer</h6>
        <h6 className=" display-7">BSCS</h6>
      </div>

      

      

    </div>

    </section>


          <Footer/>



    
      
    </>
  )
}
export default Team