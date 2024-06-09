import React from 'react'
import './ProjectsHome.css'
const ProejectsHome = () => {
  return (
    <>
    
    <div className='serv-main'>
  <div className='serv-body'>
    <div className='pro-h2-body'>
  <h2 data-text='OUR PROJECTS'>OUR PROJECTS</h2>
    </div>


    <div id="carouselExample" className="container carousel slide py-5">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./image/Projects/p1.jpg" className="d-block w-100" alt="Project"/>
    </div>
    <div className="carousel-item">
      <img src="./image/Projects/p3.jpg" className="d-block w-100" alt="Project"/>
    </div>
    {/* <div className="carousel-item">
      <img src="./image/Projects/p6.jpg" className="d-block w-100" alt="Project"/>
    </div> */}
    <div className="carousel-item">
      <img src="./image/Projects/p4.jpg" className="d-block w-100" alt="Project"/>
    </div>
    <div className="carousel-item">
      <img src="./image/Projects/p5.jpg" className="d-block w-100" alt="Project"/>
    </div>
    <div className="carousel-item">
      <img src="./image/Projects/p2.jpg" className="d-block w-100" alt="Project"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



    {/* <div id="myCarousel" className="container carousel slide  pb-5" data-bs-ride="carousel">
    
    <div className="carousel-inner">
      <div className="carousel-item active">
      <img src='./image/Projects/p3.jpg' className="d-block img-fluid mx-auto " alt="..." />
      </div>
      <div className="carousel-item active">
      <img src='./image/Projects/p2.jpg' className="d-block img-fluid mx-auto " alt="..." />
      </div>
      <div className="carousel-item active">
      <img src='./image/Projects/p6.jpg' className="d-block img-fluid mx-auto " alt="..." />
      </div>
      <div className="carousel-item active">
      <img src='./image/Projects/p4.jpg' className="d-block img-fluid mx-auto " alt="..." />
      </div>
      <div className="carousel-item active">
      <img src='./image/Projects/p5.jpg' className="d-block img-fluid mx-auto " alt="..." />
      </div>
      <div className="carousel-item active">
      <img src='./image/Projects/p1.jpg' className="d-block img-fluid mx-auto " alt="..." />
      </div>
      

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div> */}

    </div>
    </div>

    
           

        
    
    </>
  )
}

export default ProejectsHome
