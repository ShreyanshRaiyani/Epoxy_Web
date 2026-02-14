import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    message: '',
    type: '' 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, message: '', type: '' });

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/contact`, formData);

      if (response.data.success) {
        setFormStatus({
          loading: false,
          message: response.data.message,
          type: 'success'
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ loading: false, message: '', type: '' });
        }, 5000);
      }
    } catch (error) {
      let errorMessage = 'Something went wrong. Please try again later.';

      if (error.response?.data?.errors) {
        errorMessage = error.response.data.errors[0].msg || 
                      error.response.data.errors[0] ||
                      error.response.data.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setFormStatus({
        loading: false,
        message: errorMessage,
        type: 'error'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, message: '', type: '' });
      }, 5000);
    }
  };

  const contactInfo = {
    phone: '+91 97128 39092',
    email: 'valaepoxyandgrouting@gmail.com',
    address: 'Ratan Park-2,Uttamnagar, 80Ft Road,Nikol Gam Rd, Nikol, Ahmedabad, Gujarat 382350',
    hours: 'Mon - Sat: 8:00 AM - 6:00 PM',
    // Update with your actual Google Maps embed URL
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.504694861862!2d72.64605007536873!3d23.034926079165118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e875caa79fa3b%3A0x1f701896e1388388!2sVala%20Epoxy%20Grout!5e1!3m2!1sen!2sin!4v1771004528058!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Get In Touch</h2>
          <p>Let's Discuss Your Flooring Project</p>
        </div>

        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info slide-left">
            <h3>Contact Information</h3>

            <div className="contact-item stagger-item delay-1">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>{contactInfo.address}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Business Hours</h4>
                <p>{contactInfo.hours}</p>
              </div>
            </div>

            <div className="social-links">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2h3.1l-6.8 7.8L23.6 22h-6.7l-5.2-7.6L5.7 22H2.6l7.3-8.4L0 2h6.9l4.7 6.8L18.9 2zm-1.2 18h1.7L7.1 4H5.3l12.4 16z" />
                </svg>
              </a>
        
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form slide-right">
            <h3>Send Us a Message</h3>
            
            {formStatus.message && (
              <div className={`form-message ${formStatus.type}`}>
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1234567890"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="google-map fade-in">
          <iframe
            src={contactInfo.mapUrl}
            title="Business Location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;