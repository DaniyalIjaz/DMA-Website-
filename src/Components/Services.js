import React from 'react'
import './Services.css'
import {NavLink} from "react-router-dom"

const Services = () => {
  return (
<div className='serv-main'>
  <div className='serv-body'>

    <div className="card-area">
      <div className="wrapper">
        
        <p className='text-p text-center mt-0 mb-0 '>Best Construction Company in Lahore Offering</p>
    <div className='serv-h2-body p-0'>
  <h2 data-text='OUR&nbsp;CONSTRUCTION&nbsp;SERVICES'>OUR CONSTRUCTION SERVICES</h2>
    </div>
    
        <div className="box-area mt-0">

          <div className='box-m'>

          <h3 >ARCHITECTURE</h3>
          <div className="box">
            <img src="./image/Archi.jpg" alt="" />
            <div className="overlay">
              <h3>ARCHITECTURE</h3>
              <p>Our architects turn the visions into stunning structures.</p>
              
                
                <NavLink to="/architecture">More Info</NavLink>
             
            </div>
          </div>
          </div>

          <div className='box-m'>

          <h3 >ENGINEERING</h3>
          <div className="box">
            <img src="./image/Eng.jpg" alt="" />
            <div className="overlay">
            <h3>ENGINEERING</h3>
              <p>Structural engineering is an area of specialization of Design Man Associates.</p>
              <NavLink to="/engineering">More Info</NavLink>
            </div>
          </div>
          </div>

          <div className='box-m'>

          <h3 >CONSTRUCTION</h3>
          <div className="box">
            <img src="./image/Cons.jpg" alt="" />
            <div className="overlay">
            <h3>CONSTRUCTION</h3>
              <p>Design Man Associates offers both construction and construction management services.</p>
              <NavLink to="/construction">More Info</NavLink>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
    </div>
    </div>

  
  )
}
export default Services
