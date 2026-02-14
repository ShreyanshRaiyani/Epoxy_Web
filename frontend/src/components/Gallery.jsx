import React, { useState } from 'react';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('epoxy'); // 'epoxy' or 'grouting'

  // Epoxy work images
  const epoxyImages = [
    {
      src: '/images/epoxy/office.jpg',
      alt: 'Commercial office epoxy flooring installation',
      caption: 'Commercial Office Space'
    },
    {
      src: '/images/epoxy/warehouse.jpg',
      alt: 'Industrial warehouse epoxy coating',
      caption: 'Industrial Warehouse'
    },
    {
      src: '/images/epoxy/residential.jpg',
      alt: 'Residential epoxy flooring',
      caption: 'Residential Project'
    },
    {
      src: '/images/epoxy/residential1.jpg',
      alt: 'Residential garage epoxy',
      caption: 'Residential Garage'
    },
    {
      src: '/images/epoxy/retails.jpg',
      alt: 'Commercial retail showroom flooring',
      caption: 'Retail Showroom'
    },
    {
      src: '/images/epoxy/colored.jpg',
      alt: 'Colored epoxy floor finish',
      caption: 'Colored Epoxy'
    },
    {
      src: '/images/epoxy/customdesign.webp',
      alt: 'Custom epoxy design pattern',
      caption: 'Custom Design'
    },
    {
      src: '/images/epoxy/heavyduty.jpg',
      alt: 'Heavy-duty epoxy coating',
      caption: 'Heavy-Duty Floor'
    },
    {
      src: '/images/epoxy/highglose.jpg',
      alt: 'High-gloss epoxy coating',
      caption: 'High-Gloss Finish'
    },
    {
      src: '/images/epoxy/parking.jpg',
      alt: 'Epoxy parking lot flooring',
      caption: 'Parking Area'
    },
    {
      src: '/images/epoxy/industrial.jpeg',
      alt: 'Industrial epoxy coating',
      caption: 'Industrial Floor'
    },
    {
      src: '/images/epoxy/terrece.jpg',
      alt: 'Terrace epoxy flooring',
      caption: 'Terrace Flooring'
    }
  ];

  // Grouting work images
  const groutingImages = [
    {
      src: '/images/grouting/bathroom.jpg',
      alt: 'Bathroom tile grouting',
      caption: 'Bathroom Grouting'
    },
    {
      src: '/images/grouting/commercial.jpg',
      alt: 'Commercial tile grouting work',
      caption: 'Commercial Space'
    },
    {
      src: '/images/grouting/doorGrouting.jpg',
      alt: 'Doorway tile grouting',
      caption: 'Doorway Grouting'
    },
    {
      src: '/images/grouting/floortile.jpg',
      alt: 'Floor tile grouting',
      caption: 'Floor Tiles'
    },
    {
      src: '/images/grouting/goruting.jpg',
      alt: 'Grouting finish detail',
      caption: 'Grouting Finish'
    },
    {
      src: '/images/grouting/hall.jpg',
      alt: 'Hall tile grouting',
      caption: 'Hall Flooring'
    },
    {
      src: '/images/grouting/kitechen.jpg',
      alt: 'Kitchen tile grouting',
      caption: 'Kitchen Flooring'
    },
    {
      src: '/images/grouting/living-room.jpg',
      alt: 'Living room tile grouting',
      caption: 'Living Room'
    },
    {
      src: '/images/grouting/residential.jpg',
      alt: 'Residential grouting work',
      caption: 'Residential Space'
    },
    {
      src: '/images/grouting/shower.jpg',
      alt: 'Shower area grouting',
      caption: 'Shower Area'
    },
    {
      src: '/images/grouting/wall-strip.jpg',
      alt: 'Wall strip tile grouting',
      caption: 'Wall Strip'
    },
    {
      src: '/images/grouting/wallstrip.jpg',
      alt: 'Wall strip grouting detail',
      caption: 'Wall Strip Detail'
    }
  ];

  const currentImages = activeTab === 'epoxy' ? epoxyImages : groutingImages;

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Work Gallery</h2>
          <p>Explore Our Portfolio of Completed Projects</p>
        </div>

        {/* Category Tabs */}
        <div className="gallery-tabs fade-in">
          <button 
            className={`gallery-tab ${activeTab === 'epoxy' ? 'active' : ''}`}
            onClick={() => setActiveTab('epoxy')}
          >
            Epoxy Flooring
          </button>
          <button 
            className={`gallery-tab ${activeTab === 'grouting' ? 'active' : ''}`}
            onClick={() => setActiveTab('grouting')}
          >
            Grouting Work
          </button>
        </div>

        <div className="gallery-grid">
          {currentImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item scale-in"
              onClick={() => openLightbox(image)}
              style={{transitionDelay: `${index * 0.05}s`}}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                onError={(e) => {
                  // e.target.src = 'https://via.placeholder.com/400x300/0f4c81/ffffff?text=Epoxy+Flooring';
                }}
              />
              <div className="gallery-overlay">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p style={{
              color: 'white', 
              textAlign: 'center', 
              marginTop: '1rem',
              fontSize: '1.2rem'
            }}>
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;