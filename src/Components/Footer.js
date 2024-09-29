import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import FooterLogo from '../assets/images/logo.png';


const Footer = () => {
  return (
    <div className='footer-main'>
    <footer>
     <div className="footer-row">

     

      <div className="footer-col pb-2">
     
       
        <div className='foot-h2-body'>
  <h2 className='foot-hp' data-text='Office'>Office</h2>
    </div>


       
        <p className='text-white opacity-60'>P # 78, Imperial Garden Commercial Area</p>
        <p className='text-white opacity-60'>Paragon City, Lahore</p>
        <h6 className='footer-email-id footer-contacts fw-bold pb-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
  </svg> 
designmanassociates@gmail.com</h6>
        <h6 className='footer-contacts'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>+92 (309) 0411114</h6>
        <h6 className='footer-contacts'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>+92 (307) 4191132</h6>
      </div>
      

      <div className="footer-col pb-4">

      <div className='foot-h2-body'>
  <h2 data-text='Links'>Links</h2>
    </div>

   
        <div className=' footer-linkss'>

                    <li className='text-white opacity-60'><NavLink to="/">Home</NavLink></li>
                    <li className='text-white opacity-60'><NavLink to="/Projects">Projects</NavLink></li>
                    <li className='text-white opacity-60'><NavLink to="/about">About</NavLink></li>
                    <li className='text-white opacity-60'><NavLink to="/Team">Team</NavLink></li>
        </div>
      </div>

      <div className="footer-col">

      {/* <div className='foot-h2-body'>
  <h2 data-text='Design Man Associates'>Design Man Associates</h2>
    </div> */}
    <div className="footer-col">
        <img src={FooterLogo} alt="logo" className='footer-logo mx-auto d-block ' style={{maxWidth:'16%'}} />
        <p className='text-center footer-p'>Architects | Civil, Structural & MEP Consultants | Contractors</p>
      </div>
        
 
              <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100065533447873" className="social-icon" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="https://www.youtube.com/@DesignManAssociates" className="social-icon" target="_blank"><i className="fab fa-youtube" ></i></a>
              <a href="https://www.instagram.com/designmanassociates.pk/" className="social-icon" target="_blank"><i className="fab fa-instagram"></i></a>
  
                </div>


      </div>
     </div>
      <hr className='foot-hr' />
      <p className='text-white copywrite'>Design Man Associates (Pvt) Ltd. © 2024 All Rights Reserved</p>
    </footer>
    </div>
  )
}

export default Footer