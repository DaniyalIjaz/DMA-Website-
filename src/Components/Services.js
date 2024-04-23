import React from 'react'
import './Services.css'
import {NavLink} from "react-router-dom"

const Services = () => {
  return (
<div className='serv-main'>
  <div className='serv-body'>
    <div className='serv-h2-body'>
  <h2 data-text='OUR SERVICES'>OUR SERVICES</h2>
    </div>

    <div className="card-area">
      <div className="wrapper">
        <div className="box-area">

          <div className="box">
            <img src="./image/Archi.jpg" alt="" />
            <div className="overlay">
              <h3>ARCHITECTURE</h3>
              <p>Our architects turn the visions into stunning structures.</p>
              <NavLink to="/Architecture">More Info</NavLink>
            </div>
          </div>

          <div className="box">
            <img src="./image/Eng.jpg" alt="" />
            <div className="overlay">
            <h3>ENGINEERING</h3>
              <p>Structural engineering is an area of specialization of Design Man Associates.</p>
              <NavLink to="/Engineering">More Info</NavLink>
            </div>
          </div>

          <div className="box">
            <img src="./image/Cons.jpg" alt="" />
            <div className="overlay">
            <h3>CONSTRUCTION</h3>
              <p>Design Man Associates offers both construction and construction management services.</p>
              <NavLink to="/Construction">More Info</NavLink>
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
