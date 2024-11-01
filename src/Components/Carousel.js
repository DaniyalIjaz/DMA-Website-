import React, { useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  useEffect(() => {
    // Ensure the carousel runs smoothly with a 3-second interval
    const carousel = document.querySelector('#carouselExampleFade');
    const bootstrapCarousel = new window.bootstrap.Carousel(carousel, {
      interval: 3000,  // 3 seconds
      ride: 'carousel',
      wrap: true // Infinite looping
    });

    return () => {
      bootstrapCarousel.dispose(); // Clean up on component unmount
    };
  }, []);

  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"  // Changes slide every 3 seconds
        data-bs-wrap="true"  // Ensures infinite looping
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./image/c1.jpg" className="d-block w-100" alt="..." />
            <div className="container">
              <div className="carousel-caption text-end">
                <p className="carousel-heading">
                  YOUR DREAM HOUSE IS ONE STEP AWAY FROM YOU
                </p>
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
                <p className="carousel-heading">WE BUILD YOUR FUTURE</p>
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
                <p className="carousel-heading">
                  QUALITY CONSTRUCTION, TIMELESS DEDICATION
                </p>
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





