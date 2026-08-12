import React, { useState } from 'react';

const ProductsUsed = () => {
  const [activeTab, setActiveTab] = useState('epoxy');
  const [shadeCard, setShadeCard] = useState(null);

  const epoxyProducts = [
    {
      name: 'Asian',
      englishName: 'Asian',
      type: 'Epoxy Paint & Coating',
      description: 'Premium epoxy coating solution for high-strength, glossy, and long-lasting floor finishes.',
      image: 'epoxy/asian.jpg'
    },
    {
      name: 'Pidlite',
      englishName: 'Pidlite',
      type: 'Epoxy Adhesive',
      description: 'Trusted epoxy adhesive product known for strong bonding and reliable floor performance.',
      image: 'epoxy/pidlite.jpg'
    },
    {
      name: 'Sakshi',
      englishName: 'Sakshi',
      type: 'Epoxy Product',
      description: 'Reliable epoxy product for smooth application and long-lasting protection.',
      image: 'epoxy/sakshi.jpg'
    },
    {
      name: 'Sika',
      englishName: 'Sika',
      type: 'Epoxy Grout & Sealant',
      description: 'Professional epoxy-grade product offering excellent chemical and moisture resistance.',
      image: 'epoxy/sika.jpg'
    }
  ];

  const groutingProducts = [
    {
      name: 'LATICRETE',
      englishName: 'LATICRETE',
      type: 'Advanced Grout System',
      description: 'International brand offering high-performance grouting and tile setting solutions.',
      image: 'grouting/laticrete.jpg'
    },
    {
      name: 'Sika',
      englishName: 'Sika',
      type: 'Epoxy Grout & Sealant',
      description: 'Global leader in construction chemicals with premium waterproof grouting.',
      image: 'grouting/sika.jpg'
    },
    {
      name: 'Roff',
      englishName: 'Roff',
      type: 'Grout & Joint Filler',
      description: 'Specialized grouting product for clean joints, strong bonding, and long-term finish quality.',
      image: 'grouting/roff-starlike.jpg'
    }
  ];

  const currentProducts = activeTab === 'epoxy' ? epoxyProducts : groutingProducts;

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img 
          src={`/images/${product.image}`} 
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-content">
        <h4>{product.name}</h4>
        <p className="product-type">{product.type}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );

  const openShadeCard = (card) => {
    setShadeCard(card);
    document.body.style.overflow = 'hidden';
  };

  const closeShadeCard = () => {
    setShadeCard(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="products-used" className="products-used section">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Products We Use</h2>
          <p>Premium materials and brands selected for superior quality and long-lasting performance.</p>
        </div>

        {/* Tab Navigation */}
        <div className="gallery-tabs fade-in">
          <button 
            className={`gallery-tab ${activeTab === 'epoxy' ? 'active' : ''}`}
            onClick={() => setActiveTab('epoxy')}
          >
            Epoxy Products
          </button>
          <button 
            className={`gallery-tab ${activeTab === 'grouting' ? 'active' : ''}`}
            onClick={() => setActiveTab('grouting')}
          >
            Grouting Products
          </button>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {currentProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>

        {/* Shade Card Button */}
        {activeTab === 'epoxy' ? (
          <div className="shade-card-section fade-in">
            <button
              className="shade-card-btn"
              onClick={() => openShadeCard({
                title: 'Epoxy Shade Card',
                src: '/images/epoxy/shade_card.pdf',
                type: 'pdf'
              })}
            >
              View Shade Card
            </button>
          </div>
        ) : (
          <div className="shade-card-section fade-in">
            <button
              className="shade-card-btn"
              onClick={() => openShadeCard({
                title: 'Grouting Shade Card',
                src: '/images/grouting/Shade_card.jpg',
                type: 'image'
              })}
            >
              View Shade Card
            </button>
          </div>
        )}

        <p className="products-note fade-in">
          We also work with customer-demanded materials and apply products according to your specific requirements and suggestions.
        </p>
      </div>

      {/* Shade Card Modal */}
      {shadeCard && (
        <div className="pdf-viewer-backdrop" onClick={closeShadeCard}>
          <div className="pdf-viewer-container" onClick={(e) => e.stopPropagation()}>
            <button className="pdf-close-btn" onClick={closeShadeCard}>
              ×
            </button>
            <h3>{shadeCard.title}</h3>
            {shadeCard.type === 'pdf' ? (
              <iframe
                src={shadeCard.src}
                title={shadeCard.title}
                type="application/pdf"
                width="100%"
                height="100%"
                className="pdf-iframe"
              />
            ) : (
              <img
                src={shadeCard.src}
                alt={shadeCard.title}
                className="shade-card-image"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsUsed;
