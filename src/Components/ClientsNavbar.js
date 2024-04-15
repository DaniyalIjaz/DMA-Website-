import React from 'react'
import './ClientsNavbar.css'
import Footer from './Footer'

const ClientsNavbar = () => {
  return (
    <div>
      <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic">Valued Clientele</h1>
      <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p class="lead mb-5 text-body-emphasis fw-bold">Our Core Strength  is your satisfaction</p>
    </div>
      
    {/* images */}
    <div class="ClientsNavbarImages album py-5 bg-body-tertiary">

    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 rounded">
        <div class="col">
          <div class="card shadow-sm ">
            <img src="./image/Architecturaldesign.jpg" alt="" />
           
            <div class="card-body ">
              <p class="card-text">Muhammad Fahad Ijaz</p>
              <div class="">
                
                <small class="text-body-secondary ">CEO</small>
              </div>
            </div>
          </div>
        </div>

      

        
      </div>
    </div>
  </div>


  </div>
    <Footer/>
    </div>
  )
}

export default ClientsNavbar
