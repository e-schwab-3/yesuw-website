import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#home" className="nav-logo" onClick={() => scrollToSection('home')}>
          YesUW
        </a>
        <div className={`nav-items ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
              About
            </a>
            <a href="#events" className="nav-link" onClick={() => scrollToSection('events')}>
              Events
            </a>
            <a href="#connect" className="nav-link" onClick={() => scrollToSection('connect')}>
              Connect
            </a>
            <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </div>
          <div className="nav-social">
            <a
              href="https://www.instagram.com/yes.uw/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://groupme.com/join_group/103426481/kAsXb7dk"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GroupMe
            </a>
          </div>
        </div>
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`toggle-bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 