import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"  // Changes slide every 2 seconds
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./image/c1.jpg" className="d-block w-100" alt="..." />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className="carousel-heading">
                  YOUR DREAM HOUSE IS ONE STEP AWAY FROM YOU
                </h1>
                <p className="opacity-75 carousel-paragraph">
                  WE CONSTRUCT A BETTER TOMORROW FOR YOUR GENERATIONS FUTURE
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./image/c2.jpg" className="d-block w-100" alt="..." />
            <div className="container">
              <div className="carousel-caption">
                <h1 className="carousel-heading">WE BUILD YOUR FUTURE</h1>
                <p className="carousel-paragraph">
                  WE CONSTRUCT MORE THAN BUILDINGS, WE BUILD HOPE
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./image/c3.jpg" className="d-block w-100" alt="..." />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className="carousel-heading">
                  QUALITY CONSTRUCTION, TIMELESS DEDICATION
                </h1>
                <p className="carousel-paragraph">YOU WANT IT WE BUILD IT</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;










// import React from 'react'


// import './Carousel.css'

// const Carousel = () => {
//   return (
// <>
// <div id="carouselExampleFade" className="carousel slide carousel-fade">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img  src="./image/c1.jpg" className="d-block w-100 "  alt="..."/>
//       <div className="container">
//     <div className="carousel-caption text-end">
//     <h1 className='carousel-heading'>YOUR DREAM HOUSE IS ONE STEP AWAY FROM YOU</h1>
//     <p className="opacity-75 carousel-paragraph">WE CONSTRUCT A BETTER TOMORROW FOR YOUR GENERATIONS FUTURE</p>
    
//     </div>
//     </div>
//     </div>

//     <div className="carousel-item">
//       <img src="./image/c2.jpg" className="d-block w-100" alt="..."/>
//       <div className="container">
//     <div className="carousel-caption">
//     <h1 className='carousel-heading'>WE BUILD YOUR FUTURE</h1>
//     <p className=' carousel-paragraph'>WE CONSTRUCT MORE THAN BUILDINGS, WE BUILD HOPE</p>
    
//     </div>
//     </div>
//     </div>

//     <div className="carousel-item">
//       <img src="./image/c3.jpg" className="d-block w-100" alt="..."/>
//       <div className="container">
//     <div className="carousel-caption text-end ">
//     <h1 className='carousel-heading'>QUALITY CONSTRUCTION, TIMELESS DEDICATION</h1>
//     <p className=' carousel-paragraph'>YOU WANT IT WE BUILD IT</p>
    
//     </div>
//     </div>
//     </div>

//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//   </>
//   )
// }

// export default Carousel


