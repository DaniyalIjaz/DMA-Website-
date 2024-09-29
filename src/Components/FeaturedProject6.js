import React, { useState, useEffect } from 'react';
import './FeaturedProject1.css';
import Footer from './Footer';

const FeaturedProject6 = () => {
  // Array of image sources
  const images = [
    "/image/ProjectsDetails/p6/1.jpg",
    "/image/ProjectsDetails/p6/2.jpg",
    "/image/ProjectsDetails/p6/3.jpg",
    "/image/ProjectsDetails/p6/4.jpg",
    "/image/ProjectsDetails/p6/5.jpg",
    "/image/ProjectsDetails/p6/6.jpg"
  ];
  

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change image manually (from thumbnails)
  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  // Effect for automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3 seconds interval
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <>
    <div className="featuredProject1-container ">
      {/* heading  */}
      <p className='text-center h1 my-4 fw-bold'>Eman Medical Tower</p>
      {/* Main Image */}
      <div className="featuredProject1-carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="featuredProject1-carousel-image"
        />
      </div>

      {/* Thumbnails */}
      <div className="featuredProject1-thumbnail-container container rounded mx-auto d-flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`featuredProject1-thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => changeImage(index)}
          >
            <img src={image} alt={`Thumbnail ${index}`} className="featuredProject1-thumbnail-img"  />
            <div className="featuredProject1-overlay"></div>
          </div>
        ))}
      </div>
      <table className="table table-striped m-5 border text-start">
    <thead>
      
    </thead>
    <tbody>
    <tr>
        <th>Title</th>
        <td>CONSTRUCTION OF PROPOSED EMAN MEDICAL TOWER AT HAFIZABAD</td>
      </tr>
      <tr>
        <th>Location</th>
        <td>HAFIZABAD</td>
      </tr>
      <tr>
        <th>Client</th>
        <td>Dr. Asim</td>
      </tr>
      <tr>
        <th>Scope of work</th>
        <td>Turnkey project including Architectural design, Structural design, MEP design.</td>
      </tr>
      <tr>
        <th>Number of stories </th>
        <td>5</td>
      </tr>
      <tr>
        <th>Covered area</th>
        <td>67500 sft.</td>
      </tr>
    </tbody>
  </table>
    </div>
    <Footer/>
    </>
    
  );
};

export default FeaturedProject6;