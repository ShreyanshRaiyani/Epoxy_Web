import React from 'react';

const Hero = () => { 
  const whatsappNumber = '+919712839092'; 
  const heroBg = `${process.env.PUBLIC_URL}/images/Bg.jpg`;

  return (
    <section
      id="home"
      className="hero"
      style={{ '--hero-bg': `url(${heroBg})` }}
    >
      <div className="container hero-content">
        <p className="hero-subtitle">Premium Quality Flooring Solutions</p>
        <h1>Transform Your Space with Professional <span style={{color: '#D4AF37'}}>Epoxy Flooring</span></h1>
        <p className="hero-description">
          Delivering exceptional epoxy flooring and grouting services for commercial and 
          residential projects. High-quality materials, skilled professionals, and competitive pricing.
        </p>
        
        

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Get Free Quote
          </a>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your epoxy flooring services`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            💬 WhatsApp Us
          </a>
        </div>

        <div className="hero-icon-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
            
          </svg>
        </div>
      </div>

      <div className="hero-scroll">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;