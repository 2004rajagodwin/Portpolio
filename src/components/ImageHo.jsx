import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ImageHo.css"; // We'll put the styles here


import reo1 from '../assets/logo-reo-1.jpg'; 
import reo2 from '../assets/logo-reo-2.jpg'; 
import reo3 from '../assets/logo-reo-3.jpg'; 
import reo4 from '../assets/logo-reo-4.jpg'; 
import reo5 from '../assets/logo-reo-5.jpg'; 
import reo6 from '../assets/logo-reo-6.jpg'; 
import reo7 from '../assets/logo-reo-7.jpg'; 
import reo8 from '../assets/logo-reo-8.jpg'; 
import reo9 from '../assets/logo-reo-9.jpg'; 
import reo10 from '../assets/logo-reo-10.jpg'; 
import reo11 from '../assets/logo-reo-11.jpg'; 
import reo12 from '../assets/logo-reo-12.jpg'; 
import reo13 from '../assets/logo-reo-13.jpg'; 
import reo14 from '../assets/logo-reo-14.jpg'; 



const ImageHo = () => {
  return (
    <section className="new-ava-logo-con-section">
      <div className="container text-center">
        <h2 className="new-ava-logo-con-section-h2">
          <span className="new-ava-logo-con-section-sp">
            Sectors Godwin Tech Helps{" "}
          </span>
          Shine Bright
        </h2>
        <p className="new-ava-logo-con-section-pt">
          As the best Web design company in Thirunelveli, it is capable of
          offering services to a wide range of industries.
        </p>

        <div className="row justify-content-center">
          {/* Left Column */}
          <div className="col-md-5 text-start position-relative">
            {[
              { name: "REAL ESTATE", img: reo1 },
              { name: "FOOD & RESTAURANTS", img:  reo2 },
              { name: "HEALTHCARE & FITNESS", img:  reo3 },
              { name: "TRAVEL & TRANSPORT", img:  reo4 },
              { name: "INSTITUTIONS / EDUCATION", img:  reo5},
              { name: "CONSTRUCTION", img:  reo6 },
              { name: "PHARMACEUTICALS", img: reo7 },
            ].map((sector, index) => (
              <h5 key={index} className="sector-item">
                {sector.name}
                <div className="hover-box">
                  <img src={sector.img} alt={sector.name} />
                </div>
              </h5>
            ))}
          </div>

          {/* Right Column */}
          <div className="col-md-5 text-start position-relative">
            {[
              { name: "E-COMMERCE", img:  reo8 },
              { name: "JEWELLERS", img: reo9},
              { name: "INTERIOR DESIGNERS", img:  reo10},
              { name: "BANKING & FINANCE", img:  reo11 },
              { name: "ACCOUNTING FIRMS", img:  reo12},
              { name: "IT", img:  reo13},
              { name: "GAMING", img: reo14},
            ].map((sector, index) => (
              <h5 key={index} className="sector-item">
                {sector.name}
                <div className="hover-box">
                  <img src={sector.img} alt={sector.name} />
                </div>
              </h5>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageHo;
