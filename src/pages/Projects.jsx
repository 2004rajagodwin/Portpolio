import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import useAOS from "../components/aoss"; // ✅ Import reusable AOS hook
import '../Projects.css';
import Godwcta from '../components/Godwcta';
import ics from '../assets/ics.jpg'; // ✅ single image used for all projects
import pro from '../assets/proq.jpg'; 
import tre from '../assets/treff.jpg'; 
import trea from '../assets/sign.jpg'; 
import treb from '../assets/gota.jpg'; 

import icsa from '../assets/ispe.jpg'; 
import icsb from '../assets/shi.jpg'; 
import icsc from '../assets/blog.jpg'; 




const Projects = () => {
  useAOS(); // ✅ Initialize AOS
  const [activeTab, setActiveTab] = useState('all');

  const projectCategories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'web', name: 'Web Applications', count: 6 },
    { id: 'mobile', name: 'Mobile Apps', count: 3 },
    { id: 'ecommerce', name: 'E-Commerce', count: 2 },
    { id: 'dashboard', name: 'Dashboards', count: 4 },
    { id: 'api', name: 'API & Backend', count: 3 },
  ];

  // ✅ All projects use the same 'ics' image
  const projects = [
    {
      id: 1,
      title: "Brickby Brickworks",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux", "Express"],
      liveLink: "https://brickbybrickworks.com/",
      codeLink: "#",
      category: "ecommerce",
      image: pro,
      featured: true,
      status: "completed",
      year: "2024",
    },
    {
      id: 2,
      title: "Shristihitech promoters",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Node.js"],
      liveLink: "https://shristihitechpromoters.com/",
      codeLink: "#",
      category: "web",
      image: icsb,
      featured: true,
      status: "completed",
      year: "2024",
    },
    {
      id: 3,
      title: "Infohub Consultancy",
      description:
        "A responsive weather application that displays current weather and forecasts for multiple cities with beautiful data visualizations.",
      technologies: ["React", "Chart.js", "Weather API", "CSS3", "Context API"],
      liveLink: "https://infohubconsultancy.com/",
      codeLink: "#",
      category: "web",
      image: ics,
      featured: false,
      status: "completed",
      year: "2023",
    },
    {
      id: 4,
      title: "Treffer Tech",
      description:
        "Analytics dashboard for social media metrics with interactive charts and real-time data updates.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveLink: "https://www.treffertech.com/",
      codeLink: "#",
      category: "dashboard",
      image: tre,
      featured: true,
      status: "completed",
      year: "2024",
    },
    {
      id: 5,
      title: "Signdigitizing",
      description:
        "A modern, responsive portfolio website built with React and Vite, featuring smooth animations and optimized performance.",
      technologies: ["React", "Vite", "CSS3", "React Router", "Framer Motion"],
      liveLink: "https://signdigitizing.com/",
      codeLink: "#",
      category: "web",
      image: trea,
      featured: false,
      status: "completed",
      year: "2023",
    },
    {
      id: 6,
      title: "Godwin Tech",
      description:
        "A platform for managing and integrating multiple third-party APIs with automated workflows and monitoring.",
      technologies: ["Node.js", "React", "Redis", "Docker", "AWS"],
      liveLink: "https://godwintech.wuaze.com/",
      codeLink: "#",
      category: "api",
      image: treb,
      featured: true,
      status: "completed",
      year: "2024",
    },
    {
      id: 7,
      title: "Blog",
      description:
        "Cross-platform fitness application with workout tracking, progress analytics, and social features.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveLink: "https://ispectratechnologies.com/software-development/agile-development/",
      codeLink: "#",
      category: "mobile",
      image: icsc,
      featured: false,
      status: "completed",
      year: "2023",
    },
    {
      id: 8,
      title: "Ispectra Technologies",
      description:
        "Comprehensive real estate management dashboard with property listings, analytics, and client management.",
      technologies: ["React", "TypeScript", "Node.js", "MySQL", "Chart.js"],
      liveLink: "https://ispectratechnologies.com/",
      codeLink: "#",
      category: "dashboard",
      image: icsa,
      featured: true,
      status: "completed",
      year: "2024",
    },
  ];

  const filteredProjects =
    activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <section className="projects-section">
        <div className="container">
          {/* Header Section */}
          <div className="projects-header"  data-aos="fade-up">
            <div className="header-badge">PORTFOLIO SHOWCASE</div>
            <h1 className="projects-main-title">
              Innovative <span className="highlight">Projects</span>
            </h1>
            <p className="projects-subtitle">
              A curated collection of my work showcasing innovative solutions and technical expertise across various domains
            </p>
          </div>

          {/* Stats Overview */}
          <div className="projects-stats"  data-aos="flip-up">
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

          {/* Projects Tabs */}
          <div className="projects-tabs-section">
            <div className="section-header" data-aos="fade-up">
              <h2 className="section-title">Project Gallery</h2>
              <p className="section-subtitle">
                Browse through my work categorized by technology and domain
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="projects-tabs" data-aos="fade-up">
              {projectCategories.map((category) => (
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
            <div className="projects-grid" data-aos="flip-up">
              {filteredProjects.map((project) => (
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
        </div>
      </section>

      {/* ✅ CTA section outside container for full width */}
      <section className="godwcta-wrappera">
        <Godwcta />
      </section>
    </>
  );
};

export default Projects;
