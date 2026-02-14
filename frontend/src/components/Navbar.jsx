import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMobileMenu}>
          <img src="/images/logo.png" alt="Epoxy Flooring Logo" className="logo-image" />
          <span className="logo-text">Vala Epoxy</span>
        </a>
        
        <button className="nav-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link" onClick={closeMobileMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#clients" className="nav-link" onClick={closeMobileMenu}>
              Clients
            </a>
          </li>
          <li>
            <a href="#gallery" className="nav-link" onClick={closeMobileMenu}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#reviews" className="nav-link" onClick={closeMobileMenu}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;