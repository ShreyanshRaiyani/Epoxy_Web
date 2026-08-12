import React from 'react';

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    {children}
  </svg>
);

const FeaturedProject = () => {
  const stats = [
    {
      label: 'Area Covered',
      value: '50,000+ Sq. Ft.',
      icon: <Icon><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></Icon>
    },
    {
      label: 'System',
      value: 'Multi-Layer Epoxy',
      icon: <Icon><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></Icon>
    },
    {
      label: 'Year Completed',
      value: '2024',
      icon: <Icon><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" /></Icon>
    },
    {
      label: 'Work Completed In',
      value: '30 Days',
      icon: <Icon><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>
    }
  ];

  const highlights = [
    'High-build epoxy system for heavy traffic and chemical resistance',
    'Seamless, anti-slip finish for enhanced safety',
    'Low maintenance and long-term durability',
    'Expert surface preparation and precision installation'
  ];

  return (
    <section id="featured-project" className="featured-project section">
      <div className="container">
        <div className="featured-project-shell fade-in">
          <div className="featured-project-grid">
            <div className="project-details">
              <span className="project-kicker">★&nbsp; Featured Project</span>
              <h2>Our Biggest Milestone</h2>
              <div className="project-client" aria-label="Adani industrial epoxy flooring project">
                <img src="/images/clients/Adani.png" alt="Adani" />
                <span>Industrial Epoxy Flooring Project</span>
              </div>
              <p className="project-intro">A high-performance flooring system built for strength, safety, and long-term durability.</p>

              <div className="project-stats">
                {stats.map((stat) => (
                  <div className="project-stat" key={stat.label}>
                    <div className="project-stat-icon">{stat.icon}</div>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>

              <div className="project-highlights">
                <h4>Project Highlights</h4>
                <ul>
                  {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <a className="project-detail-link" href="#contact">Request Project Details <span>→</span></a>
              </div>
            </div>

            <div className="project-gallery">
              <div className="project-main-image">
                <img src="/images/epoxy/industrial.jpeg" alt="Industrial epoxy flooring project" />
                <div className="project-image-note">
                  <Icon><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></Icon>
                  <span>Built for Performance.<br />Engineered to Last.</span>
                </div>
              </div>
              <div className="project-thumbnails">
                <img src="/images/epoxy/warehouse.jpg" alt="Industrial epoxy floor detail" />
                <img src="/images/epoxy/office.jpg" alt="Seamless epoxy floor finish" />
                <img src="/images/epoxy/parking.jpg" alt="Heavy-duty epoxy flooring" />
              </div>
            </div>
          </div>

          <div className="project-partners">
            <div className="project-trust">
              <span className="project-trophy" aria-label="Trophy" role="img">
                <Icon>
                  <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
                  <path d="M7 5H4v2a4 4 0 0 0 4 4M17 5h3v2a4 4 0 0 1-4 4" />
                </Icon>
              </span>
              <div><strong>Delivering Excellence. Building Trust.</strong><small>Proud to contribute to world-class infrastructure with premium epoxy flooring solutions.</small></div>
            </div>
            <div className="project-logos">
              <img className="adani-project-logo" src="/images/clients/Adani.png" alt="Adani" />
              <span></span>
              <img className="vala-project-logo" src="/images/logo.png" alt="Vala Epoxy Grout" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
