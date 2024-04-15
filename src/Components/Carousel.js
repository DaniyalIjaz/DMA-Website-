import React from 'react'


import './Carousel.css'

const Carousel = () => {
  return (
<div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    {/* <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    </div> */}
    <div className="carousel-inner">
      <div className="carousel-item active">
      <img src='./image/c1.jpg' className="d-block img-fluid mx-auto opacity-100" alt="..." />
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>Example headline.</h1>
            <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
            
          </div>
        </div>
      </div>

      <div className="carousel-item">
      <img src='./image/c2.jpg' className="d-block img-fluid mx-auto opacity-75" alt="..."/>
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            
          </div>
        </div>
      </div>

      <div className="carousel-item">
      <img src='./image/c3.jpg' className="d-block img-fluid mx-auto opacity-75" alt="..."/>
        <div className="container">
          <div className="carousel-caption ">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
       
          </div>
        </div>
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
  </div>
  )
}

export default Carousel


