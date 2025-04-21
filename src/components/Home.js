import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import GroupMeIcon from './icons/GroupMeIcon';
import EmailIcon from './icons/EmailIcon';
import UpcomingEvents from './UpcomingEvents';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to YesUW</h1>
          <p>Empowering students through experience and community</p>
          <a href="#about" className="cta-button">Learn More</a>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <div className="section-content">
          <p>YesUW was founded in 2021 with the mission of bringing like-minded students together to grow through sharing new and exciting experiences.</p>
          <p>We believe in the power of stepping outside your comfort zone!</p>
          <p>Our community thrives on authentic connections and the shared belief that growth happens when we say yes to life's opportunities.</p>
          <p>Join us in creating unforgettable memories and building lasting friendships at UW-Madison.</p>
        </div>
      </section>

      <section id="events" className="events-section">
        <h2>Upcoming Events</h2>
        <p className="section-subtitle">Excited to join in our next adventure? Check out what's coming up!</p>
        <UpcomingEvents />
      </section>

      <section id="instagram" className="instagram-feed">
        <h2>Follow Our Journey</h2>
        <p>See what we're up to and join our next adventure!</p>
        <div className="instagram-embed-container">
          <iframe
            title="YesUW Instagram Feed"
            className="instagram-embed"
            src="https://www.instagram.com/yes.uw/embed"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
          ></iframe>
        </div>
      </section>

      <section id="connect" className="connect-section">
        <h2>Connect With Us</h2>
        <p className="section-subtitle">Join our community and stay updated!</p>
        <div className="connect-options">
          <div className="connect-card">
            <div className="connect-icon">
              <InstagramIcon />
            </div>
            <h3>Instagram</h3>
            <p>Follow us for updates and photos</p>
            <a href="https://www.instagram.com/yes.uw/" target="_blank" rel="noopener noreferrer" className="connect-button">
              Follow @yes.uw
            </a>
          </div>
          <div className="connect-card">
            <div className="connect-icon">
              <GroupMeIcon />
            </div>
            <h3>GroupMe</h3>
            <p>Join our community chat</p>
            <a href="https://groupme.com/join_group/103426481/kAsXb7dk" target="_blank" rel="noopener noreferrer" className="connect-button">
              Join GroupMe
            </a>
          </div>
          <div className="connect-card">
            <div className="connect-icon">
              <EmailIcon />
            </div>
            <h3>Email List</h3>
            <p>Stay updated with our newsletter</p>
            <form className="email-signup">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="connect-button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <div className="section-content">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 