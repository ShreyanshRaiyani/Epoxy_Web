import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: 'Adani',
      logo: '/images/clients/Adani.png'
    },
    {
      name: 'Amazon',
      logo: '/images/clients/amezoon.png'
    },
    {
      name: 'Cadila',
      logo: '/images/clients/cadila.png'
    },
    {
      name: 'Highly',
      logo: '/images/clients/highly.png'
    },
    {
      name: 'Man',
      logo: '/images/clients/man.png'
    },
    {
      name: 'Navy',
      logo: '/images/clients/navy.png'
    },
    {
      name: 'Decathlon',
      logo: '/images/clients/decathlon.png'
    },
    {
      name: 'Palladium',
      logo: '/images/clients/alphaone.png'
    }
  ];

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Our Clients</h2>
          <p>Trusted by Leading Businesses and Homeowners</p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="client-card scale-in"
              style={{transitionDelay: `${index * 0.05}s`}}
            >
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>

        <div className="clients-footer fade-in">
          <p style={{textAlign: 'center', fontSize: '1rem', color: 'var(--muted)', marginTop: '2rem'}}>
            Join hundreds of satisfied clients who trust us for their flooring needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
