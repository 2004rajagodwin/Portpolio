import React from 'react';

import '../WhyChooseBrick.css'; // We'll create this CSS file
import cv from '../assets/cv.png.png'; // Correct import
import cva from '../assets/pv1.png.png'; // Correct import
import cvb from '../assets/pv2.png.png'; // Correct import
import cvc from '../assets/pv3.png.png'; // Correct import
import { Link } from "react-router-dom";
import useAOS from "../components/aoss"; // ✅ Import reusable AOS hook




const WhyChooseBrick = () => {

  useAOS(); // ✅ Initialize AOS
  return (
    <section className="why-ch-brick-main-section">
      <div className="container">
        <div className="why-ch-brick-main-div">
          <div className="row">
            <div className="col-md-6">
              <div className="why-ch-brick-left">
                <h2 className="why-ch-brick-left-h2"  data-aos="fade-right">
                  Why Choose Godwin Tech as Your Thirunelveli Web Design?
                </h2>
              </div>
            </div>

            {/* dummy */}
            <div className="col-md-3"></div>

            <div className="col-md-3">
              <div className="why-ch-brick-rig">
                <div className="brick-seo-value-right-budiv-2">
                  {/* <a className="brick-seo-value-right-button-2" href="">
                    Explore more 
                  </a> */}


  <Link  data-aos="fade-left"  to="/contact" className="brick-seo-value-right-button-2">
              Explore More <i className="bi bi-arrow-right ms-2"></i>
            </Link>



                </div>
              </div>
            </div>
          </div>
        </div>

        {/* col-div */}
        <div className="why-col-main-divvv">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="why-col-main-divvv-conten"  data-aos="fade-up">
                <div className="why-col-main-divvv-icon-div">
                  <img
                    className="why-col-main-divvv-iconimg"
                    src={cv}
                    alt="Proven Track Record"
                  />
                </div>
                <h5 className="why-col-main-divvv-h5">Proven Track Record</h5>
                <p className="why-col-main-divvv-pp">
                  Each family and business is unique. That is why we do not provide cookie-cutter solutions. 
                  Instead, we provide custom-made residential and commercial complexes to fit your lifestyle and goals.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="why-col-main-divvv-conten"  data-aos="fade-down">
                <div className="why-col-main-divvv-icon-div">
                  <img
                    className="why-col-main-divvv-iconimg"
                    src={cva}
                    alt="Custom Solutions"
                  />
                </div>
                <h5 className="why-col-main-divvv-h5">Custom Solutions</h5>
                <p className="why-col-main-divvv-pp">
                  Each family and business is unique. That is why we do not provide cookie-cutter solutions. 
                  Instead, we provide custom-made residential and commercial complexes to fit your lifestyle and goals.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="why-col-main-divvv-conten"  data-aos="fade-up">
                <div className="why-col-main-divvv-icon-div">
                  <img
                    className="why-col-main-divvv-iconimg"
                    src={cvb}
                    alt="Quality Construction"
                  />
                </div>
                <h5 className="why-col-main-divvv-h5">Quality Design</h5>
                <p className="why-col-main-divvv-pp">
                  Each family and business is unique. That is why we do not provide cookie-cutter solutions. 
                  Instead, we provide custom-made residential and commercial complexes to fit your lifestyle and goals.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="why-col-main-divvv-conten" data-aos="fade-down">
                <div className="why-col-main-divvv-icon-div">
                  <img
                    className="why-col-main-divvv-iconimg"
                       src={cvc}
                    alt="Expert Team"
                  />
                </div>
                <h5 className="why-col-main-divvv-h5">Expert Team</h5>
                <p className="why-col-main-divvv-pp">
                  Each family and business is unique. That is why we do not provide cookie-cutter solutions. 
                  Instead, we provide custom-made residential and commercial complexes to fit your lifestyle and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBrick;