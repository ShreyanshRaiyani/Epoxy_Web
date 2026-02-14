import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M16 10v11M12 10v11"/>
        </svg>
      ),
      title: 'Epoxy Flooring',
      description: 'Premium epoxy floor coating solutions that provide a seamless, durable, and attractive finish for any space.',
      features: [
        'High-gloss finish options',
        'Chemical and stain resistant',
        'Easy to clean and maintain',
        'Available in multiple colors',
        'UV resistant coating'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Industrial Epoxy Coating',
      description: 'Heavy-duty industrial grade epoxy systems designed to withstand extreme conditions and heavy machinery.',
      features: [
        'Impact and abrasion resistant',
        'Anti-slip surface options',
        'Oil and chemical resistant',
        'Suitable for warehouses',
        'Long-lasting durability'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="9" height="9"/>
          <rect x="13" y="2" width="9" height="9"/>
          <rect x="2" y="13" width="9" height="9"/>
          <rect x="13" y="13" width="9" height="9"/>
          <line x1="11" y1="6.5" x2="13" y2="6.5"/>
          <line x1="11" y1="17.5" x2="13" y2="17.5"/>
          <line x1="6.5" y1="11" x2="6.5" y2="13"/>
          <line x1="17.5" y1="11" x2="17.5" y2="13"/>
        </svg>
      ),
      title: 'Tile Grouting',
      description: 'Professional tile grouting services that ensure proper sealing, enhanced aesthetics, and long-term protection.',
      features: [
        'Precision application',
        'Stain-resistant grout',
        'Color matching available',
        'Mold and mildew resistant',
        'Seamless finish'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
          <circle cx="12" cy="14" r="1"/>
          <circle cx="9" cy="11" r="1"/>
          <circle cx="15" cy="11" r="1"/>
        </svg>
      ),
      title: 'Waterproof Grouting',
      description: 'Advanced waterproofing solutions for bathrooms, kitchens, and wet areas to prevent water damage.',
      features: [
        '100% waterproof barrier',
        'Prevents leakage',
        'Flexible and crack-resistant',
        'Suitable for wet areas',
        'Long-term protection'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          <line x1="2" y1="11" x2="22" y2="11"/>
          <line x1="2" y1="15" x2="22" y2="15"/>
        </svg>
      ),
      title: 'Commercial Projects',
      description: 'Comprehensive flooring solutions for commercial spaces including offices, retail stores, and showrooms.',
      features: [
        'Quick installation',
        'Minimal business disruption',
        'Custom design options',
        'Large-scale projects',
        'Professional finish'
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
          <path d="M9 12h6"/>
          <circle cx="7" cy="6" r="1"/>
        </svg>
      ),
      title: 'Residential Projects',
      description: 'Beautiful and functional flooring solutions for homes, garages, basements, and living spaces.',
      features: [
        'Aesthetic appeal',
        'Family-safe materials',
        'Custom colors and patterns',
        'Increases property value',
        'Low maintenance'
      ]
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Our Services</h2>
          <p>Comprehensive Flooring Solutions Tailored to Your Needs</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card scale-in" style={{transitionDelay: `${index * 0.1}s`}}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;