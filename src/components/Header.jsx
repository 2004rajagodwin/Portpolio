import { Link, useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "gt-active" : "");

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

          <ul className="gt-nav-links">
            <li><Link to="/" className={isActive("/")}>Home</Link></li>
            <li><Link to="/about" className={isActive("/about")}>About Us</Link></li>
            <li><Link to="/Projects" className={isActive("/Project")}>Projects</Link></li>
            <li><Link to="/skills" className={isActive("/skills")}>Skills</Link></li>
            <li><Link to="/contact" className={isActive("/contact")}>Contact Us</Link></li>
          </ul>

          <Link to="/contact" className="gt-quote-btn">Get a Quote</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
