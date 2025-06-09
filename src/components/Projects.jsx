import React, { useEffect } from 'react';
import './Projects.css';
import cupcakeVideo from '../assets/WebPage Redesign.mp4';
import coffee from '../assets/Coffee.mp4';
import SaaS from '../assets/SaaS.mp4';
import Framer from '../assets/Framer.mp4';


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
    title: "Coffee Subscription Service Landing Page",
    year: "2025",
    description: "A fully responsive landing page designed for a coffee subscription service, focusing on user experience and visual branding.",
    tech: "Figma",
    video: coffee, // Replace with your own video link
    link: "https://github.com"
  },
  {
    title: "Cupcake Shop Landing Page",
    year: "2025",
    description: "A sweet and visually appealing responsive landing page for a cupcake shop, designed with attention to mobile-friendly layouts and customer conversion.",
    tech: "Figma",
    video: cupcakeVideo, // Replace with your own video link
    link: "https://github.com"
  },
  {
    title: "Hero Section UI in Framer",
    year: "2025",
    description: "A responsive hero section design built in Framer, showcasing modern animations and layout for a clean first impression.",
    tech: "Framer",
    video: Framer, // Replace with your own video link
    link: "https://github.com"
  },
  {
    title: "SaaS Product Landing Page",
    year: "2025",
    description: "A modern, responsive landing page for a fictional SaaS product, designed using Figma and prototyped in Framer.",
    tech: "Figma, Framer",
    video: SaaS, // Replace with your own video link
    link: "https://github.com"
  }
];

const Projects = () => {
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
              <div className="project-video">
                <video 
                  src={project.video} 
                  controls 
                  muted 
                  playsInline 
                  preload="metadata"
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3>{project.title}</h3>
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
