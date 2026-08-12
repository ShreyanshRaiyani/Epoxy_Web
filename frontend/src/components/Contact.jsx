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

    const phoneValue = formData.phone.trim();
    const phoneRegex = /^\+?[0-9\s()-]{7,20}$/;
    if (!phoneRegex.test(phoneValue)) {
      setFormStatus({
        loading: false,
        message: 'Please enter a valid phone number.',
        type: 'error'
      });
      return;
    }

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
                  inputMode="tel"
                  pattern="\+?[0-9\s()-]{7,20}"
                  title="Enter a valid phone number (7-20 digits, optional +, spaces, or dashes)."
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
