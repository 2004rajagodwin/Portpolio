import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projectCategories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'web', name: 'Web Applications', count: 6 },
    { id: 'mobile', name: 'Mobile Apps', count: 3 },
    { id: 'ecommerce', name: 'E-Commerce', count: 2 },
    { id: 'dashboard', name: 'Dashboards', count: 4 },
    { id: 'api', name: 'API & Backend', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux", "Express"],
      liveLink: "#",
      codeLink: "#",
      category: "ecommerce",
      image: "/images/projects/ecommerce-platform.jpg",
      featured: true,
      status: "completed",
      year: "2024"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Node.js"],
      liveLink: "#",
      codeLink: "#",
      category: "web",
      image: "/images/projects/task-management.jpg",
      featured: true,
      status: "completed",
      year: "2024"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather and forecasts for multiple cities with beautiful data visualizations.",
      technologies: ["React", "Chart.js", "Weather API", "CSS3", "Context API"],
      liveLink: "#",
      codeLink: "#",
      category: "web",
      image: "/images/projects/weather-dashboard.jpg",
      featured: false,
      status: "completed",
      year: "2023"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with interactive charts and real-time data updates.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveLink: "#",
      codeLink: "#",
      category: "dashboard",
      image: "/images/projects/social-analytics.jpg",
      featured: true,
      status: "completed",
      year: "2024"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Vite, featuring smooth animations and optimized performance.",
      technologies: ["React", "Vite", "CSS3", "React Router", "Framer Motion"],
      liveLink: "#",
      codeLink: "#",
      category: "web",
      image: "/images/projects/portfolio-website.jpg",
      featured: false,
      status: "completed",
      year: "2023"
    },
    {
      id: 6,
      title: "API Integration Platform",
      description: "A platform for managing and integrating multiple third-party APIs with automated workflows and monitoring.",
      technologies: ["Node.js", "React", "Redis", "Docker", "AWS"],
      liveLink: "#",
      codeLink: "#",
      category: "api",
      image: "/images/projects/api-platform.jpg",
      featured: true,
      status: "completed",
      year: "2024"
    },
    {
      id: 7,
      title: "Fitness Mobile App",
      description: "Cross-platform fitness application with workout tracking, progress analytics, and social features.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveLink: "#",
      codeLink: "#",
      category: "mobile",
      image: "/images/projects/fitness-app.jpg",
      featured: false,
      status: "completed",
      year: "2023"
    },
    {
      id: 8,
      title: "Real Estate Dashboard",
      description: "Comprehensive real estate management dashboard with property listings, analytics, and client management.",
      technologies: ["React", "TypeScript", "Node.js", "MySQL", "Chart.js"],
      liveLink: "#",
      codeLink: "#",
      category: "dashboard",
      image: "/images/projects/real-estate-dashboard.jpg",
      featured: true,
      status: "completed",
      year: "2024"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="projects-section">
      <div className="container">
        {/* Header Section */}
        <div className="projects-header">
          <div className="header-badge">PORTFOLIO SHOWCASE</div>
          <h1 className="projects-main-title">
            Innovative <span className="highlight">Projects</span>
          </h1>
          <p className="projects-subtitle">
            A curated collection of my work showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Stats Overview */}
        <div className="projects-stats">
          <div className="stat-item">
            <div className="stat-number">{projects.length}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{featuredProjects.length}</div>
            <div className="stat-label">Featured Works</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Technologies Used</div>
          </div>
        </div>

        {/* Featured Projects */}
        {/* <div className="featured-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-grid">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                featured={true}
                size="large"
              />
            ))}
          </div>
        </div> */}

        {/* Projects Tabs */}
        <div className="projects-tabs-section">
          <div className="section-header">
            <h2 className="section-title">Project Gallery</h2>
            <p className="section-subtitle">Browse through my work categorized by technology and domain</p>
          </div>

          {/* Tabs Navigation */}
          <div className="projects-tabs">
            {projectCategories.map(category => (
              <button
                key={category.id}
                className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                {...project}
                featured={project.featured}
                size="regular"
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📁</div>
              <h3>No projects found</h3>
              <p>There are no projects in this category yet.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="projects-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to bring your ideas to life with cutting-edge technology</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Get In Touch</button>
              <button className="btn btn-secondary">View Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;