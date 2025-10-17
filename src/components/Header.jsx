import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? "gt-active" : "");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="gt-header">
      {/* 🔹 Top Contact Bar */}
      <div className="gt-topbar">
        <div className="gt-topbar-left">
          <span><FaEnvelope /> godwinraja62@gmail.com</span>
          <span><FaMapMarkerAlt /> Thirunelveli</span>
          <span><FaPhoneAlt /> +91-6379362330</span>
        </div>
        <div className="gt-topbar-right">
          <a href="https://test.southindiafinvest.com/"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="gt-navbar">
        <div className="container gt-container">
          <div className="gt-logo">
            <span className="gt-logo-blue">Godwin</span> Tech
          </div>

          {/* Desktop Navigation */}
          <ul className="gt-nav-links">
            <li><Link to="/" className={isActive("/")}>Home</Link></li>
            <li><Link to="/about" className={isActive("/about")}>About Us</Link></li>
            <li><Link to="/Projects" className={isActive("/Project")}>Projects</Link></li>
            <li><Link to="/skills" className={isActive("/skills")}>Skills</Link></li>
            <li><Link to="/contact" className={isActive("/contact")}>Contact Us</Link></li>
          </ul>

          <Link to="/contact" className="gt-quote-btn">Get a Quote</Link>

          {/* Mobile Menu Button */}
          <button className="gt-mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div className={`gt-side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="gt-side-menu-header">
          <div className="gt-logo">
            <span className="gt-logo-blue">Godwin</span> Tech
          </div>
          <button className="gt-close-menu" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>
        
        <ul className="gt-side-nav-links">
          <li><Link to="/" className={isActive("/")} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className={isActive("/about")} onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/Projects" className={isActive("/Project")} onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/skills" className={isActive("/skills")} onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="/contact" className={isActive("/contact")} onClick={toggleMenu}>Contact Us</Link></li>
        </ul>

        <Link to="/contact" className="gt-quote-btn" onClick={toggleMenu}>Get a Quote</Link>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="gt-menu-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;