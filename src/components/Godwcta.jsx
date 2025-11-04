import React from "react";
import "../Godwcta.css";
import { Link } from "react-router-dom";
import useAOS from "../components/aoss"; // ✅ Import reusable AOS hook


const Godwcta = () => {
  useAOS(); // ✅ Initialize AOS
  return (
    <section className="ricco-cta-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center" data-aos="fade-up">
            <h2 className="ricco-cta-title">Create Your Perfect Home with Us</h2>
            <p className="ricco-cta-text">
              Are you ready to convert your home into something extraordinary?
              RICCO Interiors makes creating your dream home simple, inspirational,
              and accessible.
            </p>
            {/* <a href="#contact" className=""></a> */}

              <Link to="/contact" className="ricco-cta-btn">
           Contact Us Now<i className="bi bi-arrow-right ms-2"></i>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Godwcta;
