import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../GodwinTechSlider.css';

const GodwinTechSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Innovative Solutions",
      description: "Cutting-edge technology solutions for modern businesses",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      cta: "Explore Solutions",
      link: "/contact",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Learn More",
      link: "/contact",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for growing enterprises",
      image: "https://images.unsplash.com/photo-1451188502541-13943edb6acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
      cta: "Get Started",
      link: "/contact",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Secure Now",
      link: "/contact",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Let's Build Together",
      description: "Partner with us to create extraordinary digital experiences",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Let's Work Together",
      link: "/contact",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ffa36c 100%)"
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
    <div className="godwin-slider">
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
            
            <div className="slide-content">
              <div className="content-wrapper">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
                <Link to={slide.link} className="cta-button">
                  {slide.cta}
                  <span className="arrow">→</span>
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