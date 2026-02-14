import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Handle different animation types
          if (entry.target.classList.contains('fade-in')) {
            entry.target.classList.add('fade-in-visible');
          }
          if (entry.target.classList.contains('slide-left')) {
            entry.target.classList.add('slide-left-visible');
          }
          if (entry.target.classList.contains('slide-right')) {
            entry.target.classList.add('slide-right-visible');
          }
          if (entry.target.classList.contains('scale-in')) {
            entry.target.classList.add('scale-in-visible');
          }
          if (entry.target.classList.contains('stagger-item')) {
            entry.target.classList.add('stagger-item-visible');
          }
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const animationSelectors = ['.fade-in', '.slide-left', '.slide-right', '.scale-in', '.stagger-item'];
    animationSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => observer.observe(el));
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;