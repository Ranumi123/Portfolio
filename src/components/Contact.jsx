import React, { useState, useEffect } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.querySelector('#contact');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className={visible ? 'visible' : ''}>
      <div className="section-header">
        <h2>Get In <span className="highlight">Touch</span></h2>
        <div className="header-line"></div>
        <p className="section-subtitle">Let's collaborate on something amazing together</p>
      </div>
      
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <div className="contact-message">
            <h3>Say Hello!</h3>
            <p>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <p className="availability">
              <span className="status-dot"></span>
              <span>Available for freelance & full-time positions</span>
            </p>
          </div>
          
          <div className="contact-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:your@email.com" aria-label="Email Me">
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
        
        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="send-button">
              <span>Send Message</span>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;