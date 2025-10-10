import { useState } from 'react';
import godwinImage from '../assets/godwin.png'; // Correct import

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showProfileDetail, setShowProfileDetail] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleProfileDetail = () => {
    setShowProfileDetail(!showProfileDetail);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          <div className="about-content" style={{ display: 'flex', gap: '3rem', alignItems: 'center'  }}>
            {/* Left Side - Unique Profile Card Design */}
            <div className="profile-card" style={{ flex: '1', minWidth: '300px' }}>
              <div 
                className="profile-card-container"
                style={{
                  position: 'relative',
                  background: 'linear-gradient(135deg, #000039, #1a237e)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 20px 40px rgba(0, 0, 57, 0.3)',
                  overflow: 'hidden',
                  transform: 'translateY(0)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 57, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 57, 0.3)';
                }}
              >
                {/* Decorative elements */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    zIndex: 1
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    zIndex: 1
                  }}
                />
                
                {/* Profile Image with unique design */}
                <div 
                  className="profile-image-wrapper"
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                 <div 
  className="profile-image"
  style={{ 
    background: '#000039', 
    height: '200px', 
    width: '200px',
    borderRadius: '50%',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0, 0, 57, 0.4)',
    border: '4px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease'
  }}
  onClick={toggleProfileDetail}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
  }}
>
  {/* Profile Image - Fixed */}
  <img 
    src={godwinImage}  // <-- Using the imported image variable
    alt="Godwin Raja"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
      transition: 'opacity 0.4s ease',
    }}
  />

  {/* Name overlay */}
  <span 
    style={{
      position: 'absolute',
      bottom: '15px',
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '5px 10px',
      borderRadius: '12px',
      fontSize: '0.9rem',
      zIndex: 2,
    }}
  >
    Godwin Raja
  </span>

  {/* Shimmer effect */}
  <div 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
      transform: 'translateX(-100%)',
      animation: 'shimmer 2s infinite',
      zIndex: 1,
    }}
  />

  {/* Click indicator */}
  <div 
    style={{
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      background: 'rgba(255,255,255,0.2)',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      zIndex: 3,
    }}
  >
    +
  </div>

  {/* Shimmer keyframes */}
  <style>
    {`
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}
  </style>
</div>

                </div>
                
                {/* Profile Detail View */}
                {showProfileDetail && (
                  <div 
                    className="profile-detail"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(0, 0, 57, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '15px',
                      padding: '1.5rem',
                      width: '85%',
                      zIndex: 10,
                      boxShadow: '0 15px 35px rgba(0, 0, 57, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      animation: 'fadeInScale 0.3s ease-out'
                    }}
                  >
                    <button 
                      onClick={toggleProfileDetail}
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem'
                      }}
                    >
                      ×
                    </button>
                    
                    <h3 style={{ color: 'white', marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>Profile Details</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '20px', color: 'rgba(255,255,255,0.7)' }}>👤</div>
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Name</div>
                          <div style={{ color: 'white' }}>Godwin Raja</div>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '20px', color: 'rgba(255,255,255,0.7)' }}>💼</div>
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Role</div>
                          <div style={{ color: 'white' }}>Full Stack Developer</div>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '20px', color: 'rgba(255,255,255,0.7)' }}>📍</div>
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Location</div>
                          <div style={{ color: 'white' }}>Remote</div>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '20px', color: 'rgba(255,255,255,0.7)' }}>📧</div>
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Email</div>
                          <div style={{ color: 'white' }}>godwin@example.com</div>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '20px', color: 'rgba(255,255,255,0.7)' }}>🔗</div>
                        <div>
                          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Portfolio</div>
                          <div style={{ color: 'white' }}>godwinraja.dev</div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        toggleProfileDetail();
                        openModal();
                      }}
                      style={{
                        background: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: 'white',
                        padding: '0.6rem 1rem',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '1rem auto 0',
                        width: '80%'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.25)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.15)';
                      }}
                    >
                      View Full Profile
                    </button>
                  </div>
                )}
                
                {/* Profile Info */}
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                  <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Godwin Raja</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Full Stack Developer</p>
                  
                  {/* Decorative line */}
                  <div 
                    style={{
                      height: '3px',
                      width: '60px',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
                      margin: '0 auto 1.5rem',
                      borderRadius: '3px'
                    }}
                  />
                  
                  {/* Short bio */}
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    Crafting digital experiences with clean code and creative solutions.
                  </p>
                  
                  {/* Stats */}
                  <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1.5rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>3+</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Years Exp.</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>50+</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Projects</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>24/7</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Support</div>
                    </div>
                  </div>
                  
                  {/* View Profile Button */}
                  <button
                    onClick={openModal}
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: 'white',
                      padding: '0.7rem 1.5rem',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      width: '80%'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.25)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.15)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    View Full Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - About Text */}
            <div className="about-text" style={{ flex: '2' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#000039' }}>Hello! I'm Godwin Raja</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#444' }}>
                I'm a passionate Full Stack Web Developer with expertise in modern web technologies. 
                With over 3 years of experience in the industry, I specialize in creating dynamic, 
                responsive, and user-friendly web applications.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#444' }}>
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a career where I get to build amazing digital experiences 
                every day. I believe in writing clean, efficient code and creating solutions that 
                make a difference.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#444' }}>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community.
              </p>
              
              {/* Skills highlight */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: '#000039' }}>Core Skills</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS'].map((skill, index) => (
                    <span 
                      key={index}
                      style={{
                        background: 'rgba(0, 0, 57, 0.1)',
                        color: '#000039',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <a 
                  href="/contact" 
                  className="btn"
                  style={{
                    background: 'linear-gradient(135deg, #000039, #1a237e)',
                    color: 'white',
                    padding: '0.8rem 2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(0, 0, 57, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 12px 25px rgba(0, 0, 57, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 57, 0.3)';
                  }}
                >
                  Let's Work Together
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transform: 'translateX(-100%)',
                      animation: 'shimmer 2s infinite'
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal remains the same as previous implementation */}
      {isModalOpen && (
        <div 
          className="modal-overlay" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 57, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(8px)',
            animation: 'fadeIn 0.4s ease-out'
          }}
          onClick={closeModal}
        >
          <div 
            className="modal-content"
            style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              maxWidth: '850px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 70px rgba(0, 0, 57, 0.5)',
              animation: 'slideUp 0.5s ease-out',
              transform: 'translateY(0)',
              border: '1px solid rgba(0, 0, 57, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              className="modal-header"
              style={{
                position: 'relative',
                padding: '2.5rem',
                borderBottom: '1px solid #eee',
                background: 'linear-gradient(135deg, #000039, #1a237e)',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                color: 'white',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  animation: 'moveBackground 20s linear infinite'
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: '700' }}>Godwin Raja</h2>
                <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9, fontSize: '1.1rem' }}>Full Stack Web Developer</p>
              </div>
              
              <button 
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.8rem',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  zIndex: 3
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.25)';
                  e.target.style.transform = 'rotate(90deg)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.15)';
                  e.target.style.transform = 'rotate(0deg)';
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
                <div style={{ flex: '1', minWidth: '220px' }}>
                  <div 
                    className="modal-profile-image"
                    style={{
                      background: '#000039',
                      height: '220px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.6rem',
                      borderRadius: '12px',
                      marginBottom: '1.8rem',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 10px 25px rgba(0, 0, 57, 0.3)',
                      animation: 'pulse 3s infinite'
                    }}
                  >
                    {/* Using the imported image in modal as well */}
                    <img 
                      src={godwinImage}
                      alt="Godwin Raja"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px',
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                        animation: 'pulseGlow 3s infinite'
                      }}
                    />
                  </div>
                  
                  <div className="quick-facts" style={{ marginBottom: '1.8rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                    <h3 style={{ marginBottom: '1rem', color: '#000039', fontSize: '1.3rem' }}>Quick Facts</h3>
                    <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.9' }}>
                      <li><strong style={{ color: '#000039' }}>Experience:</strong> 3+ years</li>
                      <li><strong style={{ color: '#000039' }}>Specialization:</strong> Full Stack Development</li>
                      <li><strong style={{ color: '#000039' }}>Location:</strong> Remote</li>
                      <li><strong style={{ color: '#000039' }}>Status:</strong> Available for projects</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ flex: '2', minWidth: '280px' }}>
                  <h3 style={{ marginBottom: '1.2rem', color: '#000039', fontSize: '1.5rem' }}>About Me</h3>
                  <p style={{ marginBottom: '1.2rem', lineHeight: '1.8', color: '#444' }}>
                    I'm a passionate Full Stack Web Developer with expertise in modern web technologies. 
                    With over 3 years of experience in the industry, I specialize in creating dynamic, 
                    responsive, and user-friendly web applications.
                  </p>
                  <p style={{ marginBottom: '1.2rem', lineHeight: '1.8', color: '#444' }}>
                    My journey in web development started with a curiosity about how websites work, 
                    and it has evolved into a career where I get to build amazing digital experiences 
                    every day. I believe in writing clean, efficient code and creating solutions that 
                    make a difference.
                  </p>
                  
                  <h3 style={{ marginBottom: '1rem', marginTop: '1.8rem', color: '#000039', fontSize: '1.5rem' }}>Skills & Expertise</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginBottom: '1.8rem' }}>
                    {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS', 'TypeScript', 'Redux', 'REST APIs', 'Git', 'Responsive Design'].map((skill, index) => (
                      <span 
                        key={index}
                        style={{
                          background: 'linear-gradient(135deg, #000039, #1a237e)',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '30px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          boxShadow: '0 4px 8px rgba(0, 0, 57, 0.2)',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-3px)';
                          e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 57, 0.3)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 57, 0.2)';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <h3 style={{ marginBottom: '1rem', color: '#000039', fontSize: '1.5rem' }}>What I Do</h3>
                  <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.9', color: '#444' }}>
                    <li>Build responsive and interactive web applications</li>
                    <li>Develop RESTful APIs and backend services</li>
                    <li>Create database schemas and manage data efficiently</li>
                    <li>Implement authentication and security best practices</li>
                    <li>Optimize applications for performance and scalability</li>
                  </ul>
                </div>
              </div>
              
              <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                <a 
                  href="/contact" 
                  className="btn"
                  style={{
                    background: 'linear-gradient(135deg, #000039, #1a237e)',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(0, 0, 57, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: 'float 3s ease-in-out infinite'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 12px 25px rgba(0, 0, 57, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 57, 0.3)';
                  }}
                >
                  Let's Work Together
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transform: 'translateX(-100%)',
                      animation: 'shimmer 2s infinite'
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(40px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from { 
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 0, 57, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(0, 0, 57, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 0, 57, 0); }
        }
        
        @keyframes pulseGlow {
          0% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.5; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(0.8); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes moveBackground {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .modal-overlay {
          animation: fadeIn 0.4s ease-out;
        }
        
        .modal-content {
          animation: slideUp 0.5s ease-out;
        }
        
        .profile-detail {
          animation: fadeInScale 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default About;
