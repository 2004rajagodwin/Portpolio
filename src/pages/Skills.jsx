import React from 'react';
import '../Skills.css';
import useAOS from "../components/aoss"; // ✅ Import reusable AOS hook

const Skills = () => {
  useAOS(); // ✅ Initialize AOS
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "🖥️",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "SASS/SCSS", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 88 },
        { name: "Responsive Design", level: 92 },
        { name: "Web Performance", level: 85 }
      ],
      color: "#00D4FF"
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 82 },
        { name: "Django", level: 78 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Authentication", level: 85 },
        { name: "Server-side Rendering", level: 80 },
        { name: "Microservices", level: 75 }
      ],
      color: "#00D4FF"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 82 },
        { name: "Redis", level: 75 },
        { name: "Database Design", level: 85 },
        { name: "Query Optimization", level: 80 },
        { name: "ORM/ODM", level: 78 }
      ],
      color: "#00D4FF"
    },
    // {
    //   title: "Tools & DevOps",
    //   icon: "🔧",
    //   skills: [
    //     { name: "Git & GitHub", level: 90 },
    //     { name: "Docker", level: 75 },
    //     { name: "AWS", level: 70 },
    //     { name: "CI/CD Pipelines", level: 72 },
    //     { name: "Webpack", level: 80 },
    //     { name: "Vite", level: 85 },
    //     { name: "Jest", level: 78 },
    //     { name: "Cypress", level: 70 },
    //     { name: "Agile Methodology", level: 85 },
    //     { name: "JIRA", level: 80 }
    //   ],
    //   color: "#FFD93D"
    // }
  ];

  // const experienceLevels = [
  //   {
  //     level: "Expert",
  //     color: "#00FF88",
  //     skills: ["React.js", "JavaScript", "Node.js", "Git", "HTML5 & CSS3"],
  //     description: "Deep expertise with extensive production experience",
  //     projects: "50+ Projects"
  //   },
  //   {
  //     level: "Advanced",
  //     color: "#00D4FF",
  //     skills: ["Vue.js", "TypeScript", "MongoDB", "AWS", "Tailwind CSS"],
  //     description: "Strong proficiency with complex project experience",
  //     projects: "30+ Projects"
  //   },
  //   {
  //     level: "Intermediate",
  //     color: "#FFD93D",
  //     skills: ["Python", "Docker", "GraphQL", "PostgreSQL", "Django"],
  //     description: "Solid understanding with hands-on project experience",
  //     projects: "20+ Projects"
  //   }
  // ];

  const stats = [
    { number: "50+", label: "Technologies", suffix: "Mastered" },
    { number: "100+", label: "Projects", suffix: "Completed" },
    { number: "5+", label: "Years", suffix: "Experience" },
    { number: "99%", label: "Client", suffix: "Satisfaction" }
  ];

  return (
    <section className="skills-section">
      <div className="container">
        {/* Premium Header */}
        <div className="skills-header"  data-aos="fade-up">
          <div className="header-badge">TECHNICAL MASTERY</div>
          <h1 className="skills-main-title">
            Technical <span className="highlight">Excellence</span>
          </h1>
          <p className="skills-subtitle">
            Leveraging cutting-edge technologies to deliver exceptional digital solutions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="stats-overview" data-aos="flip-up">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-content">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-suffix">{stat.suffix}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-categories-grid" data-aos="flip-down">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category-card"
              style={{ '--accent-color': category.color }}
            >
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <span className="category-icon">{category.icon}</span>
                </div>
                <h3 className="category-title">{category.title}</h3>
                <div className="category-decoration"></div>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bar">
                      <div 
                        className="skill-progress-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: category.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Levels */}
        {/* <div className="experience-section">
          <div className="section-header">
            <h2 className="section-title">Proficiency Spectrum</h2>
            <p className="section-subtitle">Comprehensive skill assessment across technology domains</p>
          </div>
          <div className="experience-levels-grid">
            {experienceLevels.map((level, index) => (
              <div 
                key={index} 
                className="experience-level-card"
                style={{ '--level-color': level.color }}
              >
                <div className="level-badge" style={{ backgroundColor: level.color }}>
                  {level.level}
                </div>
                <div className="level-content">
                  <div className="level-stats">
                    <div className="level-projects">{level.projects}</div>
                  </div>
                  <p className="level-description">{level.description}</p>
                  <div className="level-skills">
                    {level.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="level-skill-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Technology Stack */}
        <div className="tech-stack-section" > 
          <div className="section-header"  data-aos="fade-up">
            <h2 className="section-title">Technology Stack</h2>
            <p className="section-subtitle">Comprehensive toolkit for modern web development</p>
          </div>
          <div className="tech-stack-grid" data-aos="flip-up">
            <div className="tech-stack-category">
              <h4>Frontend</h4>
              <div className="tech-tags">
                <span>React</span><span>Vue.js</span><span>TypeScript</span><span>Tailwind</span>
                <span>SASS</span><span>Bootstrap</span><span>Next.js</span><span>Redux</span>
              </div>
            </div>
            <div className="tech-stack-category">
              <h4>Backend</h4>
              <div className="tech-tags">
                <span>Node.js</span><span>Express</span><span>Python</span><span>Django</span>
                <span>GraphQL</span><span>REST APIs</span><span>Microservices</span>
              </div>
            </div>
            <div className="tech-stack-category">
              <h4>Database</h4>
              <div className="tech-tags">
                <span>MongoDB</span><span>PostgreSQL</span><span>MySQL</span><span>Redis</span>
                <span>Firebase</span><span>ORM</span>
              </div>
            </div>
            <div className="tech-stack-category">
              <h4>DevOps</h4>
              <div className="tech-tags">
                <span>Docker</span><span>AWS</span><span>Git</span><span>CI/CD</span>
                <span>Webpack</span><span>Jest</span><span>Agile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;