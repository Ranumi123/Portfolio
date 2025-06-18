import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';
import ResumePDF from '../assets/Ranumi Perera.pdf';

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  // ✅ useMemo to avoid recreating the array every render
  const titles = useMemo(() => ["Ranumi Perera", "UI/UX Designer", "QA Engineer", "Project"], []);

  const typingSpeed = 150;
  const deletingSpeed = 50;
  const delayTime = 2000;

  useEffect(() => {
    if (displayedText === "") {
      setDisplayedText("Hi, I'm ");
    }

    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullTitle = titles[i];

      if (isWaiting) return;

      if (!isDeleting) {
        setText(fullTitle.substring(0, text.length + 1));
        if (text.length === fullTitle.length) {
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
          }, delayTime);
        }
      } else {
        setText(fullTitle.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, isWaiting, displayedText, titles]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            {displayedText}<span className="highlight typing-container">
              {text}<span className="cursor">|</span>
            </span>
          </h1>
          <p className="role-text fade-in">
            UI/UX Designer | QA Engineer | Project Manager
          </p>
          <div className="hero-buttons fade-in">
            <a href={ResumePDF} className="btn" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
            <a href="#projects" className="btn secondary">View Projects</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={require('../assets/profile.jpg')} alt="Ranumi Perera" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
