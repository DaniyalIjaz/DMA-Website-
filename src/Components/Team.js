import React from 'react'
import "./Team.css"
import {NavLink} from "react-router-dom"
import Footer from './Footer'


const Team = () => {
  return (
    <>

<section class="py-2 text-center container">
    <div class="row py-lg-2">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Meet Our Team</h1>
        <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        
      </div>
    </div>


  <div class="row">
      <div class="col-lg-4 py-4">
        <img className='team-images' src="./image/logo1.png" alt="" />
        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        
      </div>

      <div class="col-lg-4 py-4">
        <img className='team-images' src="./image/Eng.jpg" alt="" />
        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        
      </div>
      
      
    </div>

    </section>


          <Footer/>



    
      
    </>
  )
}
export default Team