import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Epoxy Flooring Services</h3>
            <p>
              Your trusted partner for premium epoxy flooring and grouting solutions.
              Delivering quality, durability, and excellence since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Epoxy Flooring</a></li>
              <li><a href="#services">Industrial Epoxy Coating</a></li>
              <li><a href="#services">Tile Grouting</a></li>
              <li><a href="#services">Waterproof Grouting</a></li>
              <li><a href="#services">Commercial Projects</a></li>
              <li><a href="#services">Residential Projects</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+919712839092">+91 97128 39092</a>
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:valaepoxyandgrouting@gmail.com">valaepoxyandgrouting@gmail.com</a>
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Ratan Park-2, Uttamnagar, 80Ft Road, Nikol Gam Rd, Nikol, Ahmedabad, Gujarat 382350</span>
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Epoxy Flooring Services. All rights reserved. |
            <a href="#" style={{ marginLeft: '0.5rem' }}>Privacy Policy</a> |
            <a href="#" style={{ marginLeft: '0.5rem' }}>Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
