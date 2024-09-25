import React from 'react';
import './Clients.css';

const Clients = () => {
  const imageCount = 34; // Total unique images
  const images = Array.from({ length: imageCount }, (_, i) => `/image/Clientslogo/${i + 1}.jpg`);

  return (
    <div className='Clients-body'>
      <h2 className="display-6 fw-bold text-center pt-5">OUR CLIENTS</h2>
      {/* <hr className='clients-hr-space' /> */}
      <div className="slider my-4">
        <div className="slide-track">
          {images.concat(images).map((src, index) => (
            <div className="slideee" key={index}>
              <img src={src} alt={`Client ${index}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      {/* <hr className='clients-hr-space' /> */}
    </div>
  );
}

export default Clients;
