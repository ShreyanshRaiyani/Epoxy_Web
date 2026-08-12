import React from 'react';

const Materials = () => {
  const groutingMaterials = [
    {
      name: 'પીડી લાઈટ (Pidi Light)',
      englishName: 'Pidi Light',
      category: 'Grouting',
      description: 'Premium quality grouting solution known for excellent adhesion and water resistance. Perfect for tile fixing and joint filling with superior bonding strength.',
      features: ['Superior adhesion', 'Water resistant', 'Long-lasting durability', 'Easy application'],
      image: 'epoxy/pidilite.jpg'
    },
    {
      name: 'સાક્ષી (Sakshi)',
      englishName: 'Sakshi',
      category: 'Grouting',
      description: 'Renowned grouting and tile adhesive brand offering reliable performance for all grouting needs. Trusted by professionals for consistent quality.',
      features: ['Consistent quality', 'Reliable bonding', 'Professional grade', 'Cost-effective'],
      image: 'epoxy/sakshi.jpg'
    },
    {
      name: 'LATICRETE',
      englishName: 'LATICRETE',
      category: 'Grouting',
      description: 'International brand providing advanced grouting systems and tile setting solutions. Known for innovation and high-performance products.',
      features: ['Advanced technology', 'High performance', 'Professional tested', 'Industry trusted'],
      image: 'grouting/laticrete.jpg'
    },
    {
      name: 'Sika',
      englishName: 'Sika',
      category: 'Grouting',
      description: 'Global leader in construction chemicals. Offers premium epoxy grouting and waterproofing solutions with guaranteed performance.',
      features: ['Global standards', 'Epoxy formulation', 'Waterproof', 'Damage resistant'],
      image: 'grouting/sika.jpg'
    }
  ];

  const epoxyMaterials = [
    {
      name: 'એશિયન (Asian)',
      englishName: 'Asian',
      category: 'Epoxy',
      description: 'Leading epoxy paint and flooring solution provider. Delivers high-strength epoxy coatings for durable, glossy, and protective floor finishes.',
      features: ['High strength', 'Glossy finish', 'Chemical resistant', 'Long durability'],
      image: 'epoxy/asian.png'
    },
    {
      name: 'બર્જર (Berger)',
      englishName: 'Berger',
      category: 'Epoxy',
      description: 'Premium epoxy flooring specialist offering superior color options and finishes. Perfect for industrial and residential applications.',
      features: ['Premium quality', 'Color variety', 'Professional finish', 'UV resistant'],
      image: 'epoxy/berger.jpg'
    },
    {
      name: 'સિક્કા (Sikka)',
      englishName: 'Sikka',
      category: 'Epoxy',
      description: 'Expert in epoxy coating solutions with proven track record. Provides durable, aesthetically pleasing epoxy flooring systems.',
      features: ['Proven quality', 'Aesthetic appeal', 'Durable coating', 'Professional applied'],
      image: 'epoxy/highglose.jpg'
    },
    {
      name: 'Roff',
      englishName: 'Roff',
      category: 'Epoxy',
      description: 'Innovation-focused brand offering comprehensive epoxy and waterproofing solutions. Engineered for maximum protection and beauty.',
      features: ['Innovative formulas', 'Waterproofing', 'Weather resistant', 'Expert engineered'],
      image: 'grouting/roff-starlike.jpg'
    }
  ];

  const MaterialCard = ({ material }) => (
    <div className="material-card fade-in">
      <div className="material-image-wrapper">
        <img 
          src={`/images/${material.image}`} 
          alt={material.name}
          className="material-image"
        />
        <div className="material-category-badge">{material.category}</div>
      </div>
      <div className="material-content">
        <h3>{material.name}</h3>
        <p className="material-english-name">{material.englishName}</p>
        <p className="material-description">{material.description}</p>
        <div className="material-features">
          <h4>Key Features:</h4>
          <ul>
            {material.features.map((feature, i) => (
              <li key={i}>✓ {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Epoxy Solutions Section */}
      <section id="epoxy-materials" className="materials section">
        <div className="container">
          <div className="section-title fade-in">
            <h2>Epoxy Solutions</h2>
            <p>Industry-leading epoxy brands delivering superior durability, gloss, and protection for all flooring needs.</p>
          </div>
          <div className="materials-grid">
            {epoxyMaterials.map((material, idx) => (
              <MaterialCard key={idx} material={material} />
            ))}
          </div>
        </div>
      </section>

      {/* Grouting Products Section */}
      <section id="grouting-materials" className="materials section">
        <div className="container">
          <div className="section-title fade-in">
            <h2>Grouting Products</h2>
            <p>Premium grouting solutions ensuring perfect joints, water resistance, and long-lasting adhesion for tile installations.</p>
          </div>
          <div className="materials-grid">
            {groutingMaterials.map((material, idx) => (
              <MaterialCard key={idx} material={material} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Materials;
