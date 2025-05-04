import React, { useEffect } from 'react';
import './Projects.css';

// Animation observer for scroll effects
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

const projects = [
  {
    title: "MindBridge Mobile Application",
    status: "ongoing",
    description: "A 24/7 AI-powered mental health support app with an AI chatbot for real-time assistance. Features include anonymous support, mood tracking, crisis intervention, and a secure community platform to enhance user well-being.",
    tech: "Dart, Node.js",
    image: "https://via.placeholder.com/600x400?text=MindBridge+App",
    link: "https://github.com"
  },
  {
    title: "Estate Agent Web Application",
    year: "2025",
    description: "Developed a web application that enabled users to search properties from a JSON file with a user-friendly and accessible interface.",
    tech: "React JS, HTML 5",
    image: "https://via.placeholder.com/600x400?text=Estate+Agent+App",
    link: "https://github.com"
  },
  {
    title: "Portfolio Website",
    year: "2025",
    description: "A personal portfolio website showcasing projects and skills with modern design principles and responsive layout.",
    tech: "HTML, CSS",
    image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    link: "https://github.com"
  },
  {
    title: "Green Steps Mobile Application UI",
    year: "2024",
    description: "Designed UI layouts and mockups for an eco-friendly app that promotes sustainable habits, focusing on user experience and visual appeal.",
    tech: "Figma",
    image: "https://via.placeholder.com/600x400?text=Green+Steps+UI",
    link: "https://github.com"
  },
  {
    title: "Real-time Ticketing System",
    year: "2024",
    description: "Built a real-time event ticketing system for seamless event booking and management with both a command-line interface and a graphical user interface.",
    tech: "Java, Node.js, React",
    image: "https://via.placeholder.com/600x400?text=Ticketing+System",
    link: "https://github.com"
  },
  {
    title: "Personal Finance Tracker",
    year: "2024",
    description: "A Python app for tracking expenses and income with a Tkinter interface, built using OOP principles for easy maintenance.",
    tech: "Python",
    image: "https://via.placeholder.com/600x400?text=Finance+Tracker",
    link: "https://github.com"
  },
  {
    title: "Student Management System",
    year: "2024",
    description: "A Java software for managing student data with smooth file handling using Java I/O libraries.",
    tech: "Java",
    image: "https://via.placeholder.com/600x400?text=Student+Management",
    link: "https://github.com"
  }
];

const Projects = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          position: 'relative',
          display: 'inline-block',
          fontWeight: 'normal',
          color: 'white',
          paddingBottom: '20px'
        }}>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.status && <span className="project-status">{project.status}</span>}
                  {project.year && <span className="project-year">{project.year}</span>}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.tech.split(',').map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;