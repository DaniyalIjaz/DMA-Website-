import React from 'react';
import './ClientsNavbar.css';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const clients = [
  { name: 'AK Enterprises', img: './image/Clientslogo/1.jpg' },
  { name: 'BEDOUIN (PVT.) LTD', img: './image/Clientslogo/6.jpg' },
  { name: 'LAHORE MODERN CITY', img: './image/Clientslogo/16.jpg' },
  { name: 'APSACS', img: './image/Clientslogo/4.jpg' },
  { name: 'ASIAN SCALES', img: './image/Clientslogo/5.jpg' },
  { name: 'AL-FATEH FOUNDATION', img: './image/Clientslogo/2.jpg' },
  { name: 'Kwil Winery, LLC', img: './image/Clientslogo/7.jpg' },
  { name: 'CANNON PRIMAX FOAM', img: './image/Clientslogo/8.jpg' },
  { name: 'CHASHMA SUGAR MILL', img: './image/Clientslogo/9.jpg' },
  { name: 'ELMD INSTRUMENTS', img: './image/Clientslogo/10.jpg' },
  { name: 'FABRO INTERNATIONAL', img: './image/Clientslogo/11.jpg' },
  { name: 'FARABI SPORTS', img: './image/Clientslogo/12.jpg' },
  { name: 'Gulbahar Tobacco', img: './image/Clientslogo/13.jpg' },
  { name: 'HALIFAX & CO (PVT) LIMITED', img: './image/Clientslogo/14.jpg' },
  { name: 'KASMY PACK (PVT.) LTD', img: './image/Clientslogo/15.jpg' },
  { name: 'AMU WEAVERS', img: './image/Clientslogo/3.jpg' },
  { name: 'LAKOTA APPAREL', img: './image/Clientslogo/17.jpg' },
  { name: 'LONG LIFE SURGICAL INDUSTRIES', img: './image/Clientslogo/18.jpg' },
  { name: 'MEDISPOREX', img: './image/Clientslogo/19.jpg' },
  { name: 'MULTYNET', img: './image/Clientslogo/20.jpg' },
  { name: 'NANBA GROUP', img: './image/Clientslogo/21.jpg' },
  { name: 'PAK CHINA INTERNATIONAL GRAIN MARKET', img: './image/Clientslogo/22.jpg' },
  { name: 'Pakistan Rangers Punjab', img: './image/Clientslogo/23.jpg' },
  { name: 'PAKWINZ INTERNATIONAL', img: './image/Clientslogo/24.jpg' },
  { name: 'RED\'Z CORPORATION', img: './image/Clientslogo/25.jpg' },
  { name: 'SKY BIRD INTERNATIONAL', img: './image/Clientslogo/26.jpg' },
  { name: 'SWISS PRO', img: './image/Clientslogo/27.jpg' },
  { name: 'Texpak Pvt. Ltd', img: './image/Clientslogo/28.jpg' },
  { name: 'THE REQUIREMENTS GROUP', img: './image/Clientslogo/29.jpg' },
  { name: 'TRUEWIN INDUSTRIES', img: './image/Clientslogo/30.jpg' },
  { name: 'UBQARI DAROOD MAHAL', img: './image/Clientslogo/31.jpg' },
  { name: 'VIZRAMED TECHNIK', img: './image/Clientslogo/32.jpg' },
  { name: 'ZAHOOR ORCHARDS', img: './image/Clientslogo/33.jpg' },
  { name: 'ZENITH CHEMICAL', img: './image/Clientslogo/34.jpg' }
];

const ClientsNavbar = () => {
  return (
    <div>
      <div className="p-4 p-md-5 rounded text-body-emphasis bg-body-secondary">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">Valued Clientele</h1>
          <p className="lead py-3">
            We believe in building more than just structures; we build lasting relationships with each and every one of our clients.
          </p>
        </div>

        {/* Images section */}
        <div className="ClientsNavbarImages album bg-body-secondary">
          <div className="container" style={{ background: '#e9ecef' }}>
            <div className="row row-cols-2 row-cols-md-5 g-3">
              {clients.map((client, index) => (
                <div className="col" key={index}>
                  <div className="card shadow-sm">
                    <img src={client.img} alt={client.name} className="card-img-top" />
                    <div className="card-body">
                      <p className="card-text">{client.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center pb-5 about-btn" style={{ background: '#e9ecef' }}>
        <NavLink to="/">Go back home</NavLink>
      </div>

      <Footer />
    </div>
  );
};

export default ClientsNavbar;
