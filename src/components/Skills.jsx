import React, { useEffect, useState } from 'react';
import './Skills.css';

const skills = [
  {
    category: "Programming and Web Development",
    items: ["HTML/CSS", "Dart", "JavaScript", "React", "Bootstrap", "Node.js"]
  },
  {
    category: "Testing Tools",
    items: ["Postman"]
  },
  {
    category: "UI/UX Designing",
    items: ["Figma", "Framer", "Axure"]
  },
  {
    category: "Software Development",
    items: ["Java (OOP)", "Python"]
  },
  {
    category: "Project Management Tools",
    items: ["ClickUp", "Notion"]
  },
  {
    category: "Version Control",
    items: ["GitHub"]
  },
  {
    category: "Multimedia and Graphic Design",
    items: ["Photoshop", "GIMP"]
  },
  {
    category: "Microsoft Office Skills",
    items: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access"]
  }
];

// Icons for categories (you can update icons here)
const categoryIcons = {
  "Programming and Web Development": "💻",
  "Testing Tools": "🧪",
  "UI/UX Designing": "🎨",
  "Software Development": "⚙️",
  "Project Management Tools": "📁",
  "Version Control": "🔧",
  "Multimedia and Graphic Design": "🖌️",
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
