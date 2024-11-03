import React from 'react'
import './Projects.css'
import Footer from './Footer'

// import React, { Component } from "react";

import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';


// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "" }}
//       onClick={onClick}
//     />
//   );
// }



export default function Projects() {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />
  // };
  return (
    <>  
    <div className="project-main">

      {/* heading signature projects */}
        {/* <div className="serv-body pt-5">
            <div className='serv-h2-body'>
              <h2 data-text='SIGNATURE&nbsp;PROJECTS'>SIGNATURE PROJECTS</h2>
            </div>
            <p className='text-p container p-1 px-5 '>The Signature Projects selected here demonstrate the diversity of the projects Astral performs. No project is complex for us in the engineering, time or price domains. This is possible thanks to our strong emphasis on people and processes; our dominant critical success factors.</p>
        </div> */}

      {/* React slick carousel  */}
      {/* <div className="react-slick-carousel container">

      <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <img src="./image/Projects/p1.jpg" alt="" />
        </div>
        <div>
          <img src="./image/Projects/p1.jpg" alt="" />
        </div>
        <div>
          <img src="./image/Projects/p1.jpg" alt="" />
        </div>
        <div>
          <img src="./image/Projects/p1.jpg" alt="" />
        </div>
        <div>
          <img src="./image/Projects/p1.jpg" alt="" />
        </div>
        <div>
          <img src="./image/Projects/p1.jpg" alt="" />
        </div>
      </Slider>
    </div>

    </div> */}

      {/* heading featured projects */}
      <div className="serv-body pt-5">
            <div className='serv-h2-body'>
              <h2 data-text='FEATURED&nbsp;PROJECTS'>FEATURED PROJECTS</h2>
            </div>
            <p className='text-p container p-1 px-5 text-center' style={{fontSize:'18px'}}>The Featured Projects highlighted here exemplify the wide range of initiatives Astral undertakes. No endeavor is too challenging for us in terms of engineering complexity, scheduling, or budget considerations. This success is achieved through our steadfast commitment to our people and processes, which remain our primary critical success factors.</p>
        </div>

      {/* images  */}
      <div className='featured-proj-img'>
        {/* first project  */}

        <div className='box'>
        <img src="./image/ProjectsDetails/p1/3.jpg" alt="Omar Medical Tower" />

                <div className="overlay">
                      <h5>Omar Medical Tower</h5>  
                        <NavLink to="/projects/featured-project-1">More Info</NavLink>
                </div>

        </div>

        {/* 2nd project */}
        <div className='box'>
        <img src="./image/ProjectsDetails/p2/1.jpg" alt="AL-Qaim Industry" />

                <div className="overlay">
                      <h5>AL-Qaim Industry</h5>  
                        <NavLink to="/projects/featured-project-2">More Info</NavLink>
                </div>

        </div>

        {/* 3rd project */}
        <div className='box'>
        <img src="./image/ProjectsDetails/p3/1.jpg" alt="Industrial Godown Building" />

                <div className="overlay">
                      <h5>Industrial Godown Building</h5>  
                        <NavLink to="/projects/featured-project-3">More Info</NavLink>
                </div>

        </div>

      </div>

      {/* 2nd div for images  */}
      <div className='featured-proj-img'>

        {/* fourth project  */}

        <div className='box'>
        <img src="./image/ProjectsDetails/p4/1.jpg" alt="Hussain Medical Complex" />

                <div className="overlay">
                      <h5>Hussain Medical Complex</h5>  
                        <NavLink to="/projects/featured-project-4">More Info</NavLink>
                </div>

        </div>

        {/*fifth project */}
        <div className='box'>
        <img src="./image/ProjectsDetails/p5/1.jpg" alt="NRC Hospital" />

                <div className="overlay">
                      <h5>NRC Hospital</h5>  
                        <NavLink to="/projects/featured-project-5">More Info</NavLink>
                </div>

        </div>

        {/* 6th project  */}
        <div className='box'>
        <img src="./image/ProjectsDetails/p6/1.jpg" alt="Eman Medical Tower" />

                <div className="overlay">
                      <h5>Eman Medical Tower</h5>  
                        <NavLink to="/projects/featured-project-6">More Info</NavLink>
                </div>

        </div>

        

      </div>

       {/* 3rd div for images  */}
       <div className='featured-proj-img'>

      {/* 7th project  */}
      <div className='box'>
        <img src="./image/ProjectsDetails/p7/1.jpg" alt="Residential Unit at Garden Town" />

                <div className="overlay">
                      <h5>Residential Unit at Garden Town</h5>  
                        <NavLink to="/projects/featured-project-7">More Info</NavLink>
                </div>

        </div>

        </div>

      {/* <WaterPressureCalculator/> */}

      {/* All Projects  */}
    <div className="allProjects">

      <div className="serv-body pt-5">
            <div className='serv-h2-body'>
              <h2 data-text='All&nbsp;PROJECTS'>ALL PROJECTS</h2>
            </div>

        {/* Commercial Projects  */}

    <p className='text-p container px-5 text-center mt-5 pt-5' style={{fontSize:'18px'}}   ><span className='allProjectsHeadings'>COMMERCIAL PROJECTS </span></p>
        </div>

    </div>

      {/* <ProjectDetails h4='ANALYSIS AND STRUCTURAL DESIGN OF APARTMENT BUILDING FOR MR. ADEEL AT LINES AREA' p='KARACHI'/>
      <ProjectDetails h4='Project Details' p='Project Description'/>
      <ProjectDetails h4='Project Details' p='Project Description'/> */}

        <div className="container p-5">
                     
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Description</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Architectural & Structural Design of Industrial Go down Building of “AN Traders” at Hadbast Mouza, Bhobattian, Raiwind Road, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Architectural & Structural Design of 6 Storied Factory Building 
                of Multynet Electronics at Service Road, Zahra Peer, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Boiler Platform for “Chashma
                Sugar Mills Unit-II” at Dera Ismail Khan.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Apartment Building for 
                Mr. Adeel at Lines Area, Karachi.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of 8 Story Commercial Building at 
                Sector-BWC, Phase 8C, D.H.A, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of P.E. Steel Shed for “Long Life 
                Surgical Industries” at Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Factiry Building for Mr. Haseeb
                at Circular Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Office Building for Mr. Amir at 
                New Amir Town, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Rehabilitation and Upgradation of Factory Building “Medisporex Pvt. (Ltd.)” at Gohadpur Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of P.E. Steel Shed Marque for 
                “Unique Lights” at Canal bank Road, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of 7 Story Commercial Plaza at 
                Jhangeer Street, Rehman Pura, Aminanad Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of Factory Building of 
                “Requirements Group” at Sarwarabad, Kingra Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of Rehabilitation and Upgradation
                of “MAK Palace” at Haji Pura Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of Commercial Plaza “Ali Sher
                Plaza” at High Street Road, Sahiwal.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of 12 Story Commercial Plaza 
                “Nawab Mall” at Kashmir Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Factory Building for Red’z
                Corporation at Khan Mahal Road, Rang Pura, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Commercial Plaza for Mr. Ali at 
                Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Pre-Engineered Gabel Frame 
                Steel Shed at Long Life Surgical Industries, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Demakmadin Factory at 
                BismillahChowk, Pasroor Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of First floor of Warehouse 
                building of Mr. Hafiz Hafeez at Mali pura, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Hostel Building for Mr. Jaseem
                Azhar at 7.5 KM Raiwind Road, Hassan Kot Stop. Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design Plaza Building for Mr. Abid Nazir
                at Kashmir Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Truewin Factory Building for 
                Mr. Khurram Shazad at Addalat Garh, Ugoki Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Commercial Plaza for Mr. Adnan
                at Malli pura, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of 2 Story Office Building at Kohat.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of Commercial Plaza for Haji
                Abbas at Bhutta Chowk, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Production Unit for Mr. Ammar
                Bhutta at Toorabad, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Factory Building "Elmed
                Instruments Unit-II" at Rodas Road, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of Steel Truss at Bahria Town, 
                Lahore.</td>
                <td></td>
              </tr>
              <tr>
    <td>Structural design of proposed commercial building of Mr. Shah Nawaz at Oora Chowk, Kingra Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed commercial building of Mr. Raheel at Canal Bank Road, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of commercial building Salam Heights at Kamoki.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed commercial building for Mr. Abdul Wahid at Aziz Shaheed Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed commercial building for Mr. Tariq at Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed extension of sitting steps at Wagah Stadium, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed building of Khidmat Center at Safari Garden, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed commercial building of Pehchaan Store Agha Kamal Haider Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed commercial building for Mr. Hassan Baryar at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed hotel building for Mian Jahanzeb at Aminanab Road, Jahangir Street, Rehman Pura, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed gate structure of Makkah City, Daska Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed gate structure of Kingdom Valley, Islamabad.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of steel marque shed for Meezan Marque owned by Rana Atif Aslam at Bughianna Kalan, Phool Nagar.</td>
    <td></td>
</tr>


            </tbody>
          </table>
        </div>

        {/* Residential projects  */}

        <p className='text-p container px-5 text-white text-center ' style={{fontSize:'18px'}}><span className='allProjectsHeadings'>RESIDENTIAL PROJECTS </span></p>


        <div className="container p-5">
                     
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Description</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Structural Design of Residence of Mr. Nadeem Asghar at 
                Nashemen-e-Iqbal, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of 1 Kanal Residential Unit of Mr. Khurram
                Ramy at Jeevan City, Sahiwal.</td>
                <td></td>
              </tr>
              <tr>
                <td> Structural Design of Residential Unit of Mr. Shumayem Tahir at 
                City Housing Society, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td> Structural Design of 10 Marla Residential Unit of Dr. Shahid
                Tofail at Cooperative Housing Society, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of Residential Unit of Mr. Usman Saleem at , 
                Diamond City, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of 10 Marla Residential Unit of Mr. Aslam at 
                Pakpattan.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of 1 Kanal Residential Unit of Mr. Faizan at 
                Model Town, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of Residence of Mr. Tariq at Central Park 
                Housing Society, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of 1 Kanal House of Prof. M.Ikram at 
                Doctors Colony, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of 1 Kanal House of Mr. Sohaib Ahmed 
                at Cantt Area, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of Residence of Mr. Mustafa Ahmed a 
                Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of Residence of Mr. Muhammad Zafer at 
                Plot # 50, Block Q-1, Phase-2, Wapda Colony, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of Residence of Mr. Jahangir Tariq at 
                Chuni Sulehria, Sailkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of Residence of Mr. Jahangir Tariq at 
                Chuni Sulehria, Sailkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of Residence of Mr. Asmatullah at 
                Sensra Goraya Motra Road, Soalkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of 1 Kanal Residential Unit of Mr. Saad
                ur Rehman at St # 12, Sector -A, DHA, Peshawar.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural Design of 1 Kanal Residential Unit of Mr. Saeed
                Tahir Shah at DHA, Peshawar.</td>
                <td></td>
              </tr>
              <tr>
                <td> Structural Design of Residence of Mr. Saqib Khan Jadoon, 
                at Abbottabad.</td>
                <td></td>
              </tr>
              <tr>
                <td> Structural Design of Residence of Mr. Zeshan Israr at 
                DHA, Lahore.</td>
                <td></td>
              </tr>
              <tr>
    <td>Structural design of proposed residential unit of Mr. Rashid Mehmood at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit for Mr. Muhammad Shshzad at Village Nonar, Qilla Road, Zafarwal.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. Ahmad at Sheikhupura.</td>
    <td></td>
</tr>
<tr>
    <td>Finish work BOQ of residential unit of Mr. Shakeel Iqbal Chatta at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Finish work BOQ of residential unit of Mirza Sab at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. Ali Zaman at MB Villas, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of proposed residential unit for Mr. Waseem at Plot # 37-A, Phase 9, DHA, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. Ibraheem Shshzad at Plot # 98, Block-S, Khayaban-e-Amin Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. Azeem at Plot # 14-D, City Housing, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed rehabilitation and upgradation of residential unit of Mr. Bilal Sheikh at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed upgradation of residential unit at Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit at Plot No. 27, Askari-2, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit at PCSIR Housing Society, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. Hannan at Jallal Pur Jattan, Gujrat.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. M. Usman Akbar, Plot No. 260 Block-C at Park Avenue, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Salahuddin at Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed rehabilitation and upgradation of residential unit of Mr. Ubaid at Askari Cantt Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. Ali Zaman at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit at Plot No. 176, Askari-1, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. Sarfraz Aslam at Plot No. 264-C Park Avenue, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. Hafiz Adil at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>BOQ of proposed residential unit of Mr. Faisal Butt at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed residential unit of Mr. Adeel Mumtaz at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>The structural design of rehabilitation and proposed upgradation of existing residential unit of Mr. Shafiq Malik at Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of proposed residential unit of Mrs. Aroosha Wajid at Plot # 35, Sector-S, Phase-7, DHA, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of proposed residential unit of Mr. Sadiq Ali Raza at Plot # 1082, Orchards, Paragon City, Lahore.</td>
    <td></td>
</tr>

              
            </tbody>
          </table>
        </div>
         {/* Industrial Projects  */}
        
         <p className='text-p container px-5 text-white text-center ' style={{fontSize:'18px'}}><span className='allProjectsHeadings'>INDUSTRIAL PROJECTS</span></p>

<div className="container p-5">
             
  <table className="table table-dark table-hover">
    <thead>
      <tr>
        <th>Description</th>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
    <tr>
    <td>Architectural & Structural Design of Industrial Godown Building for “AN Traders” at Hadbast Mouza, Bhobattian, Raiwind Road, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Architectural & Structural Design of 6 Storied Factory Building for Multynet Electronics at Service Road, Zahra Peer, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Boiler Platform for “Chashma Sugar Mills Unit-II” at Dera Ismail Khan.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of P.E. Steel Shed for “Long Life Surgical Industries” at Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for Mr. Haseeb at Circular Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for M. Saqib at Maher Faiz Colony, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Rehabilitation and Upgradation Factory Building for Medisporex Pvt. (Ltd.) at Gohadpur Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for “Requirements Group” at Sarwarabad, Kingra Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Truewin Factory Building for Mr. Khurram Shazad at Addalat Garh, Ugoki Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for "Elmed Instruments Unit-II" at Rodas Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for Mr. Javaid at New Bilal Ganj, Quaid-e-Azam Interchange, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for Mr. Adnan at New Bilal Ganj, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Office and Warehouse Building for Paris Distributors at Attari Industrial Estate, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building at Hi Chem at Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for AMU Weavers at New Bilal Ganj, Quaid-e-Azam Interchange, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for IS Traders at Pasroor Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Unit for Mr. Jasim at Barki Road, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Extension of Factory Building of VizraMed Technik Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Vehicle Platform at M.E.L Raiwind Road, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of O.H.W. Tank at Millat Tractor Employees Cooperative Housing Society, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Factory Building of Faizan Gloves Maker at 1 KM Jammu Road, Dalowali, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for Fine Tech Pvt. (Ltd) owned by Mian Asif at Sambrial, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Abor Barrack at Chiniot Textile Mills, Bhai Pheru - Head Balloki Rd, Phool Nagar.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building for Farabi Sports of Mr. Nadir at Daska Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design for Mr. Khalid Malik at Kamran Park, Gulshan-e-Hayat, Bara Dari Road, Shadra, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Servant Quarters for Badouin Pvt. Ltd.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Rehabilitation & Extension of Factory Building of Pak Winz International at New Bilal Ganj, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Fabro International Pvt. Ltd. at Manawa, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building of Lakota Apparel at Village Ganjian Wali Kalan, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Building for Mr. Masom Abbas at Sheikhupura Road, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Vehicle Pad.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Pressure Vessel.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Godown Building for Haji Qasir at Chowk Pakpattan.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Stability Analysis for Existing Building of VizraMed Technik Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Factory Building of KPL at Phool Nagar, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Building for Al-Rehmat Motors at Kashmir Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Building for Mr. Sajjad Bhalli at Defence Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of first floor slab at factory building of Bioron Medics at Manga, Raiwind Road, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of second floor slab at factory building of Farooq Garment, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Extension of proposed store building at Zenith Chemical Pvt Ltd. at Dhondey, Raiwind, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed factory building of Mr. Faiz at Wazirabad Road, Golo, Phala, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed factory building of Mirza Empire at Alo Mahar Shareef, Daska Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed factory building of Stamina Sports at Roras Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of boundary wall at proposed factory building land of AK Enterprises, New Bilal Ganj, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Rehabilitation measures for existing factory building of Texpak Pvt. Ltd. at Madar-e-Millat Road, Quaid-e-Azam Industrial Estate, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed factory building for Mr. Asif at Mehar Faiz Colony, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of first floor of existing building of Sabri Industries at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed steel mid height flooring at Farooq Garment, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Site visit of existing factory building of Texpak Pvt. Ltd. Unit II at Nadir Chowk, Rohi Nala Road, Gajju Matah, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed factory building of Mr. Shahid at Shafi Da Bhatta, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed factory building of Mr. Waheed Butt at Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed extension on factory building of House of Surgical at Daska Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed extension factory building of KMI Mechanical at GT Road, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed building of Al-Barkat Rice Mills at Sheikhupura Road, Mureedkay, Sheikhupura.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed building of TR-Gameday at Defence Road, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed level-1 slab of factory building at Lahore.</td>
    <td></td>
</tr>

      
    </tbody>
  </table>
</div>

         {/* Healthcare Projects  */}
        
         <p className='text-p container px-5 text-white text-center ' style={{fontSize:'18px'}}><span className='allProjectsHeadings'>HEALTH CARE PROJECTS</span></p>

<div className="container p-5">
             
  <table className="table table-dark table-hover">
    <thead>
      <tr>
        <th>Description</th>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
    <tr>
    <td>Analysis & Structural Design of Al-Fateh Foundation (Medical Trust) at Mian Khanqa Road Karyala, Hafizabad.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Hospital Building for Dr. Sohaib at Bhopal Wala, Sialkot.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Eye Hospital Building for Rana Javid Azeem at Plot No 289, Block-A, LDA Avenue, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Analysis & Structural Design of Hospital Building of Dr. Raja Naveed at Sulmeer Road, Jalalpur Jattan, Gujrat.</td>
    <td></td>
</tr>
<tr>
    <td>Design of Proposed Rehabilitation and Upgradations of Existing Building for NRC Hospital at Renala Khurd Road, Okara.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of Proposed Building for Clinic at Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of Proposed Family Hospital at Karianwala District Gujrat.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of Proposed Eman Medical Tower at Hafizabad.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of Proposed Building of Liaqat Memorial Hospital at Gujrat.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of Proposed Hospital Building of Hussain Eye & General Hospital Pattoki.</td>
    <td></td>
</tr>
<tr>
    <td>Structural Design of Proposed Building of Nursing College and Institute Allied Health Sciences at Rangers Headquarters, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Rehabilitation of Existing Hospital Building for Rehmat Hospital at Fawara Chowk, Gujrat.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of Proposed Hospital Building of Hussain Surgimed at Kunjah, Mangowal, Main Sargodah Road Gujrat.</td>
    <td></td>
</tr>
<tr>
    <td>Construction of Proposed Hospital Building of Asma Wajahat Hospital at Lala Musa, Gujrat.</td>
    <td></td>
</tr>
<tr>
    <td>Up-Gradation of Existing Hospital Building of Capital Health Hospital Chakwal.</td>
    <td></td>
</tr>
<tr>
    <td>Proposed Plan of Life Care Medical Center at Chunia.</td>
    <td></td>
</tr>
<tr>
    <td>Up-Gradation of Existing Hospital Building of Life Care Hospital at Phalia, Mandi Bahauddin.</td>
    <td></td>
</tr>

      
    </tbody>
  </table>
</div>

        {/* Relegious projects  */}

        <p className='text-p container px-5 text-white text-center ' style={{fontSize:'18px'}}><span className='allProjectsHeadings'>RELIGIOUS PROJECTS </span></p>

        <div className="container p-5">
                     
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Description</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Analysis & Structural Design Tomb of “Hazrat Khawaja Anwar 
                Sain” at Daska, Sialkot.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Mosque for Mr. Zahid Khan at 
                DHA, Phase-4, Lahore.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Mosque for Mr. Rana Zubair at 
                Safdarabad, Shaikhupura.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Mosque Minaret at Tajj Pura, 
                Cenal Road, Lahore.</td>
                <td></td>
              </tr>
              <tr>
    <td>Construction of proposed Dawat-e-Islami Jamia Madrassa building at Shalimar Link Road, Golden Society, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed building of Jamia Masjid at New Bilal Ganj, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed Jamia Masjid Noorani, at Mian Mir Haq Bahu Chowk, Lahore.</td>
    <td></td>
</tr>
<tr>
    <td>Structural design of proposed building of Jamia Masjid Ismail at Ghazipur, Talwaran Mughlan, Sialkot.</td>
    <td></td>
</tr>

              
            </tbody>
          </table>
        </div>


        {/* Overseas projects  */}

        <p className='text-p container px-5 text-white text-center ' style={{fontSize:'18px'}}><span className='allProjectsHeadings'>OVERSEAS PROJECTS </span></p>

        <div className="container p-5">
                     
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Description</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Analysis & Structural Design of Steel Pedestrian Bridge at 1316 
                Singerly Road, USA.</td>
                <td></td>
              </tr>
              <tr>
                <td> Analysis & Structural Design of Steel Container House Roof at 
                Birmingham, UK.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis, Structural, Architectural & MEP Design of Steel Tiny 
                Trailer House For Mr. Mehardad at Toronto, United States.</td>
                <td></td>
              </tr>
              <tr>
                <td>Analysis & Structural Design of Steel Truss Roof at Kwil Winery 
                at USA.</td>
                <td></td>
              </tr>
              <tr>
                <td>Structural analysis of sacondary “c” channel beam on existing frame of centeal bridge ramp.</td>
                <td></td>
              </tr>
              
            </tbody>
          </table>
        </div>



      
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center pb-5 about-btn">
      <NavLink to="/">Go back home</NavLink>
      </div>
      
    </div>

  <Footer/>
    </>
  )
}
