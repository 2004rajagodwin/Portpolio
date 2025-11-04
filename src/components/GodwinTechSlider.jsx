import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../GodwinTechSlider.css';
import useAOS from "../components/aoss"; // ✅ Import reusable AOS hook

import go1 from '../assets/go1.jpg'; // Correct import
import go2 from '../assets/go2.png'; // Correct import
import go3 from '../assets/go3.png'; // Correct import


const GodwinTechSlider = () => {
  useAOS(); // ✅ Initialize AOS
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Thirunelveli Best Web Design Company",
      description: "Cutting-edge technology solutions for modern businesses",
      image: go1,
      cta: "Explore Solutions",
      link: "/contact",
      // gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Thirunelveli's Leading Digital Marketing",
      description: "Transform your business with intelligent automation",
      image:  go2,
      cta: "Learn More",
      link: "/contact",
      // gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Let’s build success through collaboration.",
      description: "Scalable cloud solutions for growing enterprises",
      image:  go3,
      cta: "Get Started",
      link: "/contact",
      // gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Crafting Future-Ready IT Experiencesy",
      description: "Protect your digital assets with advanced security",
      image:  go1,
      cta: "Secure Now",
      link: "/contact",
      // gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Innovating Digital Solutions That Matter",
      description: "Partner with us to create extraordinary digital experiences",
      image:  go2,
      cta: "Let's Work Together",
      link: "/contact",
      // gradient: "linear-gradient(135deg, #ff6b6b 0%, #ffa36c 100%)"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="godwin-slider" >
      <div 
        className="slider-container"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''} ${
              index === (currentSlide - 1 + slides.length) % slides.length ? 'prev' : ''
            } ${index === (currentSlide + 1) % slides.length ? 'next' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div 
              className="slide-overlay"
              style={{ background: slide.gradient }}
            ></div>
            
            <div className="slide-content" data-aos="fade-right" >
              <div className="content-wrapper">
                <h2  className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
                <Link to={slide.link} className="cta-button">
                  {slide.cta}
                  <span className="arrow"></span>
                </Link>
              </div>
            </div>

            {/* Slide Number Indicator */}
            <div className="slide-number">
              <span className="current">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span className="total">/{String(slides.length).padStart(2, '0')}</span>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="nav-arrow prev-arrow" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="nav-arrow next-arrow" onClick={nextSlide}>
          <span>›</span>
        </button>

        {/* Progress Bar */}
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ 
              width: `${((currentSlide + 1) / slides.length) * 100}%` 
            }}
          ></div>
        </div>

        {/* Dots Navigation */}
        <div className="dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div className="dot-progress"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GodwinTechSlider;