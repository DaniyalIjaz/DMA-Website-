import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-main'>
    <footer>
     <div className="footer-row">

     {/* <div className="footer-col">
        <img src="./image/logo.png" alt="logo" className='footer-logo' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est hic commodi quis ipsa, aperiam possimus?</p>
      </div> */}

      <div className="footer-col">
        {/* <h3>Office <div className="underline"><span></span></div></h3> */}
       
       {/* serv-body=footer-col */}
       
        <div className='foot-h2-body'>
  <h2 className='foot-hp' data-text='Office'>Office</h2>
    </div>


       
        <p className='text-white opacity-50'>Paragon, Lahore</p>
        <p className='text-white opacity-50'>Address, PIN 23423, Pakistan</p>
        <h6 className='footer-email-id footer-contacts'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg> www.dma@gmail.com</h6>
        <h6 className='footer-contacts'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>+92 309 041114</h6>
      </div>

      <div className="footer-col">

      <div className='foot-h2-body'>
  <h2 data-text='Links'>Links</h2>
    </div>

    <p className='text-white opacity-50 pb-2'>Home</p>
        <p className='text-white opacity-50 pb-2'>Projects</p>
    <p className='text-white opacity-50 pb-2'>About</p>
        <p className='text-white opacity-50 pb-2'>Contact</p>
      </div>

      <div className="footer-col">

      {/* <div className='foot-h2-body'>
  <h2 data-text='Design Man Associates'>Design Man Associates</h2>
    </div> */}
    <div className="footer-col">
        <img src="./image/logo.png" alt="logo" className='footer-logo mx-auto d-block' />
        <p className='text-center footer-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est hic commodi quis ipsa, aperiam possimus?</p>
      </div>
        
 
              <div class="social-icons">
              <a href="/" class="social-icon" target="_blank"><i class="fab fa-facebook"></i></a>
              <a href="/" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/designmanassociates.pk/" class="social-icon" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="/" class="social-icon" target="_blank"><i class="fab fa-linkedin"></i></a>
  
                </div>


      </div>
     </div>
      <hr className='foot-hr' />
      <p className='copywrite'>Design Man Associates (Pvt) Ltd. © 2024 All Rights Reserved</p>
    </footer>
    </div>
  )
}

export default Footer