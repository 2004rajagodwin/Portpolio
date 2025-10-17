import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../footer.css';


const Footer = () => {
    const isActive = (path) => (location.pathname === path ? "gt-active" : "");
  return (
    <footer className="ava-footer-section text-light pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-md-3">
            <h5 className="fw-bold">
              <span className="text-primary">Godwin</span> Tech
            </h5>
            <p className="mt-3">
              Godwin Tech delivers creative digital experiences, empowering
              businesses with modern solutions that inspire growth, innovation,
              trust, and long-lasting impact globally.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="ava-footer-social">
                <FaFacebookF />
              </a>
              <a href="#" className="ava-footer-social">
                <FaInstagram />
              </a>
              <a href="#" className="ava-footer-social">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="col-md-3 col-6">
            <h6 className="fw-semibold mb-3">Our Services</h6>
            <ul className="list-unstyled ava-footer-links">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Web Hosting Solutions</a></li>
              <li><a href="#">E-commerce Development</a></li>
              <li><a href="#">Content Management Systems</a></li>
              <li><a href="#">Website Maintenance</a></li>
              <li><a href="#">Search Engine Optimization</a></li>
            </ul>
          </div>

             <div className="col-md-3 col-6">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled ava-footer-links">
              <li><a href="#">Home</a></li>
              <li><Link to="/about" className={isActive("/about")}>About Us</Link></li>
              <li><Link to="/Projects" className={isActive("/Project")}>Projects</Link></li>
              <li><Link to="/skills" className={isActive("/skills")}>Skills</Link></li>
              <li><Link to="/contact" className={isActive("/contact")}>Contact Us</Link></li>
             
            </ul>
          </div>

          {/* Resources & Location */}
          <div className="col-md-3 col-6">
            <h6 className="fw-semibold mb-3">Our Location</h6>
            <address className="mb-3">
              2/242, Nallamalpuram,<br />
              Thisaiyanvilai, Thirunelveli (Dis)<br />
              628-656 Tamil Nadu<br />
              +91 6379362330
            </address>

            <h6 className="fw-semibold mb-2">Business Hours</h6>
            <p className="mb-1">Monday – Friday: 09:00 AM – 05:00 PM</p>
            <p>Saturday: 09:00 AM – 02:00 PM</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-5 pt-3 border-top border-secondary">
          <p className="mb-1">
            Copyright © 2025 <strong>Godwin Tech</strong>. All rights reserved.
          </p>
          <p className="small">
            <a href="#" className="ava-footer-bottom-link">Terms & Conditions</a> |
            <a href="#" className="ava-footer-bottom-link"> Privacy</a> |
            <a href="#" className="ava-footer-bottom-link"> Legal</a>
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      {/* <div className="ava-footer-scrolltop">
        <FaArrowUp />
      </div> */}
    </footer>
  );
};

export default Footer;
