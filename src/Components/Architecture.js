import React from 'react';
import './Architecture.css';
import Footer from './Footer';

const Architecture = () => {
  return (
    <>
      <div className="px-2 text-center pb-3">
        <div className="archi-body">
          <div className="archi-h2-body">
            <h2 className="display-4 fw-bold" data-text='Architecture'>Architecture</h2>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 mx-auto">
          <p className="About-p lead mb-3">
            Architecture is one of the main areas of specialization of Design Man Associates. Detailed design services are offered in the following specific areas:
          </p>
        </div>
      </div>

      {/* Architectural Design Section */}
      <div className="container col-xxl-8 px-4 py-3 border-bottom">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-12 col-sm-10 col-lg-6 mx-auto">
            <img src="./image/AD.jpg" className="d-block mx-lg-auto img-fluid rounded" alt="Architectural Design, Building and Elevation design of modern house" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 Archi-h">Architectural Design</h3>
            <p className="About-p lead">
              Architectural planning extends itself beyond the purpose of shelter. It transforms spaces into modern or timeless works. This requires an ultimate sense of responsibility, and our architects turn visions into stunning structures.
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="container px-4 py-4 Archi-areas border-bottom" id="icon-grid">
        <h5 className="container display-6 mb-4 fw-bold text-body-emphasis text-center px-2 Archi-areas-h">
          Design Man Associates has expertise in a wide range of architectural planning areas.
        </h5>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-5 Archi-areas-cat">
          {/* Individual Expertise Areas */}
          {[
            'Industrial Buildings', 'Office Buildings', 'Shops and Shopping Centers', 'Hotels and Restaurants', 
            'Hospitals and Clinics', 'Sports Facilities', 'Theatres and Auditoriums', 'Educational Facilities', 
            'Libraries', 'Museums and Art Galleries', 'Memorials and Monuments', 'Religious Buildings', 
            'Landscape Architecture', 'Residential Buildings'
          ].map((area, index) => (
            <div className="col d-flex align-items-start" key={index}>
              <h5 className="mb-0">• {area}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Interior Design Section */}
      <div className="container col-xxl-8 py-5 border-bottom text-center">
  <div className="row g-5 pt-2">
    <div className="col-lg-12">
      <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 Archi-h">Interior Design</h3>
      <p className="lead About-p">
        Luxury is not a product but a feeling that can be achieved with attention to detail, creating comfort. Design Man Associates brings this idea into its projects, whether residential, commercial, or institutional.
      </p>
    </div>

    {/* Display 3 Images Responsively */}
    <div className="col-12 d-flex flex-wrap justify-content-center gap-3">
      {['ID1.png', 'ID2.png', 'ID3.png'].map((img, index) => (
        <div key={index} className="col-6 col-md-3 d-flex justify-content-center mb-3">
          <img src={`./image/${img}`} className="img-fluid rounded" alt="Interior Design of modern home with modern ceiling paint and lighting having a perfect light and classic theme" loading="lazy"/>
        </div>
      ))}
    </div>
  </div>
</div>



      {/* Master Planning Section */}
      <div className="container col-xxl-8 px-4 py-5 border-bottom">
        <div className="row align-items-center g-5 py-2">
          
          <div className="col-lg-6">
            <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 Archi-h">Master Planning</h3>
            <p className="lead About-p">
              Design Man Associates master planning strives to channelize changeability into potential. Through site analysis and program development, we create luxury resorts, industrial campuses, and more.
            </p>
          </div>
          <div className="col-12 col-sm-10 col-lg-6 mx-auto">
            <img src="./image/Planning.jpg" className="d-block mx-lg-auto img-fluid rounded" alt="Engineer planning to create a building" width="700" height="500" loading="lazy"/>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </>
  );
};

export default Architecture;
