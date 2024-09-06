import React from 'react'
import './Projects.css'
import Footer from './Footer'

// import React, { Component } from "react";

import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
}



export default function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
    <div className="project-main">

      {/* heading signature projects */}
        <div className="serv-body pt-5">
            <div className='serv-h2-body'>
              <h2 data-text='SIGNATURE&nbsp;PROJECTS'>SIGNATURE PROJECTS</h2>
            </div>
            <p className='text-p container p-1 px-5 '>The Signature Projects selected here demonstrate the diversity of the projects Astral performs. No project is complex for us in the engineering, time or price domains. This is possible thanks to our strong emphasis on people and processes; our dominant critical success factors.</p>
        </div>

      {/* React slick carousel  */}
      <div className="react-slick-carousel container">

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

    </div>

      {/* heading featured projects */}
      <div className="serv-body pt-5">
            <div className='serv-h2-body'>
              <h2 data-text='FEATURED&nbsp;PROJECTS'>FEATURED PROJECTS</h2>
            </div>
            <p className='text-p container p-1 px-5 '>The Featured Projects highlighted here exemplify the wide range of initiatives Astral undertakes. No endeavor is too challenging for us in terms of engineering complexity, scheduling, or budget considerations. This success is achieved through our steadfast commitment to our people and processes, which remain our primary critical success factors.</p>
        </div>

      {/* images  */}
      <div className='featured-proj-img'>
        {/* first img  */}

        <div className='box'>
        <img src="./image/Projects/p1.jpg" alt="" />

                <div className="overlay">
                      <h5>Bahria Grand Mosque</h5>  
                        <NavLink to="/projects/featured-project-1">More Info</NavLink>
                </div>

        </div>

        {/* 2nd img  */}
        <div className='box'>
        <img src="./image/Projects/p1.jpg" alt="" />

                <div className="overlay">
                      <h5>Bahria Grand Mosque</h5>  
                        <NavLink to="/Architecture">More Info</NavLink>
                </div>

        </div>

        {/* 3rd  */}
        <div className='box'>
        <img src="./image/Projects/p1.jpg" alt="" />

                <div className="overlay">
                      <h5>Bahria Grand Mosque</h5>  
                        <NavLink to="/Architecture">More Info</NavLink>
                </div>

        </div>

      </div>

      {/* 2nd div for images  */}
      <div className='featured-proj-img'>
        {/* first img  */}

        <div className='box'>
        <img src="./image/Projects/p1.jpg" alt="" />

                <div className="overlay">
                      <h5>Bahria Grand Mosque</h5>  
                        <NavLink to="/Architecture">More Info</NavLink>
                </div>

        </div>

        {/* 2nd img  */}
        <div className='box'>
        <img src="./image/Projects/p1.jpg" alt="" />

                <div className="overlay">
                      <h5>Bahria Grand Mosque</h5>  
                        <NavLink to="/Architecture">More Info</NavLink>
                </div>

        </div>

        {/* 3rd  */}
        <div className='box'>
        <img src="./image/Projects/p1.jpg" alt="" />

                <div className="overlay">
                      <h5>Bahria Grand Mosque</h5>  
                        <NavLink to="/Architecture">More Info</NavLink>
                </div>

        </div>

      </div>

      {/* All Projects  */}
    <div className="allProjects">

      <div className="serv-body pt-5">
            <div className='serv-h2-body'>
              <h2 data-text='All&nbsp;PROJECTS'>ALL PROJECTS</h2>
            </div>
        {/* Commercial Projects  */}
    <p className='text-p container p-1 px-5 '><span className='allProjectsHeadings'>COMMERCIAL PROJECTS </span> highlighted here demonstrate Astral's capability to tackle a wide range of challenges. Complexity in engineering, scheduling, or cost is never an issue for us. Consistently, we deliver success through our commitment to innovation, collaboration, and streamlined processes, which form the backbone of our achievements.</p>
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

            </tbody>
          </table>
        </div>

        {/* Residential projects  */}
        <p className='text-p container p-1 px-5 text-white'><span className='allProjectsHeadings'>RESIDENTIAL PROJECTS </span> showcased here represent Astral's expertise in handling diverse challenges. Regardless of the complexity in engineering, timelines, or budgets, we excel. Our success is consistently driven by our focus on innovation, collaboration, and efficient processes, which are integral to delivering outstanding results.</p>


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
              
            </tbody>
          </table>
        </div>

        {/* Relegious projects  */}
        <p className='text-p container p-1 px-5 text-white'><span className='allProjectsHeadings'>RELIGIOUS PROJECTS </span>featured here reflect Astral's expertise in overcoming diverse challenges. Whether dealing with intricate engineering, tight schedules, or budget constraints, we consistently achieve success. This is made possible through our dedication to thoughtful planning, teamwork, and streamlined processes.</p>

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
              
            </tbody>
          </table>
        </div>


        {/* Overseas projects  */}
        <p className='text-p container p-1 px-5 text-white'><span className='allProjectsHeadings'>OVERSEAS PROJECTS </span>showcased here demonstrate Astral's ability to navigate complex challenges across international borders. Whether it's engineering intricacies, timelines, or budget considerations, we deliver with precision. Our global success is driven by a strong focus on innovation, cross-cultural collaboration, and efficient project management processes.</p>

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
