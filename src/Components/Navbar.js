import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import NavLogo from '../assets/images/logo1.png';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Navbar = () => {

    const handleMenuClose = () => {
        document.getElementById('check').checked = false; // Uncheck the checkbox to close the menu
    };

    const [show, setShow] = useState(false);

    // Function to handle file download and show modal
    const handleDownload = () => {
      // Trigger file download
      const link = document.createElement('a');
      link.href = './image/DMAProfile.pdf'; // Path to your PDF file
      link.download = 'DMAProfile.pdf';
      link.click();
      document.getElementById('check').checked = false; // Uncheck the checkbox to close the menu
  
      // Show the modal for notification
      setShow(true);
    };
    const handleClose = () => setShow(false);

    return (
        <>   
            <header className='full-navbar'>
                <nav>
                    <ul className='nav-bar'>
                        <li className='logo'>
                            <NavLink to='/' onClick={handleMenuClose}>
                                <img src={NavLogo} alt="DMA logo" />
                            </NavLink>
                        </li>
                        <input type='checkbox' id='check' />
                        <span className="menu"> 
                            <li><NavLink to="/" onClick={handleMenuClose}>Home</NavLink></li>
                            <li><NavLink to="/projects" onClick={handleMenuClose}>Projects</NavLink></li>
                            <li><NavLink to="/services" onClick={handleMenuClose}>Services</NavLink></li>
                            <li><NavLink to="/about" onClick={handleMenuClose}>About</NavLink></li>
                            <li><NavLink to="/team" onClick={handleMenuClose}>Team</NavLink></li>
                            <li><NavLink to="/our-clientele" onClick={handleMenuClose}>Our Clientele</NavLink></li>
                            <li><a href="/" onClick={handleMenuClose} data-bs-toggle="modal" data-bs-target="#myModal">Contact Us</a></li>
                            <li><Link onClick={handleDownload}>DMA Profile</Link></li>
                            {/* <li onClick={handleDownload}>DMA Profile</li> */}

                            <label htmlFor="check" className="close-menu">
                                <i className="fas fa-times"></i>
                            </label>
                        </span>
                        <label htmlFor="check" className="open-menu">
                            <i className="fas fa-bars"></i>
                        </label>
                    </ul>
                </nav>
            </header>

            {/* Modal for Downloads  */}
            {/* Modal to notify the user */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Download Started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your file download has started! If the download didn’t start automatically, <a href="./image/DMAProfile.pdf" download="DMAProfile.pdf">click here</a>.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

            {/* Modal for Contacts  */}
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title fw-bolder">GET IN TOUCH</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">

                        <p className="text-start "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg> P # 78, Imperial Garden Commercial Area, Paragon City, Lahore.</p>
      <hr />
      <p className="text-start"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg> info.designmanassociates@gmail.com</p>
      <hr />
      <p className="text-start fw-bolder"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> 0307-4191132</p>
      <p className="text-start fw-bolder"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> 0309-0411114</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;



