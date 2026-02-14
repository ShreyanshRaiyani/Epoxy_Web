import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title fade-in">
          <h2>About Us</h2>
          <p>Your Trusted Partner in Premium Flooring Solutions</p>
        </div>

        <div className="about-content">
          <div className="about-text slide-left">
            <h3>Excellence in Epoxy Flooring Since 2015</h3>
            <p>
              With over 8 years of dedicated service in the flooring industry, we have established 
              ourselves as a leading provider of high-quality epoxy flooring and grouting solutions. 
              Our commitment to excellence and customer satisfaction has made us the preferred choice 
              for both commercial and residential projects.
            </p>
            
            <p>
              <strong>Our Mission:</strong> To deliver superior flooring solutions that combine 
              durability, aesthetics, and value, while exceeding our clients' expectations through 
              professional service and innovative techniques.
            </p>

            <p>
              <strong>Our Vision:</strong> To be the most trusted and recognized name in epoxy 
              flooring services, known for our quality workmanship, reliability, and customer-centric approach.
            </p>

            <div className="about-stats">
              <div className="stat-card scale-in delay-1">
                <div className="stat-number">300+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card scale-in delay-2">
                <div className="stat-number">8+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card scale-in delay-3">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-card scale-in delay-4">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>

          <div className="about-features slide-right">
            <div className="feature-item stagger-item delay-1">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Premium Quality Materials</h4>
                <p>
                  We use only the finest epoxy materials and compounds, ensuring long-lasting, 
                  durable finishes that withstand heavy traffic and harsh conditions.
                </p>
              </div>
            </div>

            <div className="feature-item stagger-item delay-2">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                  <path d="M10 12h4"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Skilled Professionals</h4>
                <p>
                  Our team consists of certified and experienced technicians who bring expertise 
                  and precision to every project, no matter the size or complexity.
                </p>
              </div>
            </div>

            <div className="feature-item stagger-item delay-3">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6.5 4h11c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M9 8h6M9 12h4M9 16h3"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Competitive Pricing</h4>
                <p>
                  We offer transparent, competitive pricing without compromising on quality. 
                  Get the best value for your investment with our cost-effective solutions.
                </p>
              </div>
            </div>

            <div className="feature-item stagger-item delay-4">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Timely Project Completion</h4>
                <p>
                  We respect your time and deadlines. Our efficient processes ensure projects 
                  are completed on schedule without sacrificing quality.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;