import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  const titles = ["Ranumi Perera", "UI/UX Designer", "QA Engineer", "Project"];
  const typingSpeed = 150; // milliseconds per character
  const deletingSpeed = 50; // faster deletion
  const delayTime = 2000; // pause when a word is fully typed
  
  useEffect(() => {
    // Show text immediately to avoid visibility issues on load
    if (displayedText === "") {
      setDisplayedText("Hi, I'm ");
    }
    
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullTitle = titles[i];
      
      if (isWaiting) {
        // If waiting, do nothing until wait time is over
        return;
      }
      
      if (!isDeleting) {
        setText(fullTitle.substring(0, text.length + 1));
        
        // If we've fully typed the word
        if (text.length === fullTitle.length) {
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
          }, delayTime);
        }
      } else {
        setText(fullTitle.substring(0, text.length - 1));
        
        // If we've fully deleted the word
        if (text.length === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };
    
    // Different speeds for typing and deleting
    const typingTimer = setTimeout(
      handleTyping, 
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum, titles, isWaiting, displayedText]);
  
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            {displayedText}<span className="highlight typing-container">
              {text}
              <span className="cursor">|</span>
            </span>
          </h1>
          <p className="role-text fade-in">
            UI/UX Designer | QA Engineer | Project Manager
          </p>
          <div className="hero-buttons fade-in">
            <a href="/resume.pdf" className="btn">Download Resume</a>
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