import React, { useState } from 'react';
import '../ProjectCard.css';

const ProjectCard = ({
  title,
  description,
  technologies,
  liveLink,
  codeLink,
  image,
  featured,
  category,
  status,
  year,
  size = 'regular'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);

  return (
    <div className={`project-card ${featured ? 'featured' : ''} ${size}`}>
      {/* Project Image */}
      <div className="project-image-container">
        {!imageError && image ? (
          <img
            src={image}
            alt={title}
            className={`project-image ${imageLoaded ? 'loaded' : 'loading'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div className="project-image-placeholder">
            <div className="placeholder-icon">💻</div>
            <span>Project Image</span>
          </div>
        )}

        {/* Overlay */}
        <div className="project-overlay">
          <div className="project-actions">
            <a
              href={liveLink}
              className="project-btn live-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Live Demo</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 5C14 4.44772 14.4477 4 15 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V15C4 14.4477 4.44772 14 5 14C5.55228 14 6 14.4477 6 15V19H19V6H15C14.4477 6 14 5.55228 14 5Z"
                  fill="currentColor"
                />
                <path
                  d="M10 4C10 3.44772 9.55228 3 9 3H5C4.44772 3 4 3.44772 4 4V9C4 9.55228 4.44772 10 5 10C5.55228 10 6 9.55228 6 9V6H9C9.55228 6 10 5.55228 10 5V4Z"
                  fill="currentColor"
                />
                <path
                  d="M20.7071 3.29289C21.0976 3.68342 21.0976 4.31658 20.7071 4.70711L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L19.2929 3.29289C19.6834 2.90237 20.3166 2.90237 20.7071 3.29289Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Status Badge */}
        <div className={`project-status ${status}`}>
          {status === 'completed' ? '✅ Completed' : '🚧 In Progress'}
        </div>

        {/* Category Badge */}
        <div className="project-category">{category}</div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <span className="project-year">{year}</span>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-footer">
          <div className="project-links">
            <a
              href={liveLink}
              className="link-btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <a
              href={codeLink}
              className="link-btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
