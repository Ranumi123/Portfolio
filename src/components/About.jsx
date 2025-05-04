import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am a Computer Science undergraduate passionate about building innovative software solutions 
            that solve real-world problems. With experience in full-stack development, I enjoy creating 
            responsive and intuitive web applications.
          </p>
          <p>
            My journey in tech has led me to explore various domains including artificial intelligence, 
            cloud computing, and modern web frameworks. I'm constantly learning and adapting to new 
            technologies to stay at the forefront of the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;