import React, { useEffect, useState } from 'react';
import './Skills.css';

const skills = [
  { 
    category: "Programming Languages", 
    items: ["JavaScript", "Java (OOP)", "Python", "Dart"]
  },
  { 
    category: "Web Development", 
    items: ["React", "HTML/CSS", "UI/UX Design"]
  },
  {
    category: "Design Tools",
    items: ["Figma", "Photoshop", "GIMP"]
  },
  {
    category: "Software Development",
    items: ["React Programming", "Software Development"]
  },
  {
    category: "Microsoft Office Skills",
    items: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access"]
  }
];

// Icons for categories (you can replace these with actual imports if you have icon components)
const categoryIcons = {
  "Programming Languages": "💻",
  "Web Development": "🌐",
  "Design Tools": "🎨",
  "Software Development": "⚙️",
  "Microsoft Office Skills": "📊"
};

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.querySelector('#skills');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const handleCategoryHover = (index) => {
    setActiveCategory(index);
  };
  
  return (
    <section id="skills" className={visible ? 'visible' : ''}>
      <div className="section-header">
        <h2>Technical <span className="highlight">Skills</span></h2>
        <div className="header-line"></div>
        <p className="section-subtitle">A showcase of my technical expertise and proficiencies</p>
      </div>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-category ${activeCategory === index ? 'active' : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
            onMouseEnter={() => handleCategoryHover(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="category-header">
              <span className="category-icon">{categoryIcons[skill.category]}</span>
              <h3>{skill.category}</h3>
            </div>
            <ul>
              {skill.items.map((item, i) => (
                <li 
                  key={i} 
                  style={{ animationDelay: `${(index * 0.15) + (i * 0.05)}s` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;