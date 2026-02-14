import React from 'react';

const Reviews = () => {
  // Manual reviews - Edit these directly in the code
  const reviews = [
    {
      name: 'Satish Gondaliya',
      rating: 5,
      date: 'December 2025',
      text: 'Exceptional service! The team transformed our warehouse floor with industrial epoxy coating. The finish is smooth, durable, and looks fantastic. They completed the job on time and within budget. Highly recommend!',
      initials: 'SG'
    },
    {
      name: 'Ravi Patel',
      rating: 5,
      date: 'November 2024',
      text: 'We had our garage floor done with epoxy, and it turned out better than expected. The team was professional, clean, and very detail-oriented. The floor looks amazing and is so easy to clean now. Worth every penny!',
      initials: 'RP'
    },
    {
      name: 'Yaro Bro Collection',
      rating: 5,
      date: 'October 2025',
      text: 'Outstanding workmanship! They did the epoxy flooring for our showroom, and customers keep complimenting the beautiful finish. The team was punctual, professional, and delivered exactly what they promised. Will definitely use again!',
      initials: 'YB'
    },
    {
      name: 'Abhishek Jain',
      rating: 4.5,
      date: 'September 2024',
      text: 'Great experience overall. The waterproof grouting in our bathroom has solved all our leakage issues. The team was knowledgeable and explained every step of the process. Very satisfied with the results!',
      initials: 'AJ'
    },
    {
      name: 'Sahil Solanki',
      rating: 5,
      date: 'August 2025',
      text: 'Fantastic job on our commercial kitchen floor! The anti-slip epoxy coating is perfect for our needs. Safe, durable, and looks professional. The crew was efficient and minimized disruption to our business. Highly recommended!',
      initials: 'SS'
    },
    {
      name: 'Ashok Chovatiya',
      rating: 5,
      date: 'July 2025',
      text: 'Impressed with the quality and attention to detail. Our basement floor looks incredible with the metallic epoxy finish. The team was friendly, respectful of our home, and cleaned up perfectly. Thank you!',
      initials: 'AC'
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
  const sliderReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <div className="section-title fade-in">
          <h2>What Our Clients Say</h2>
          <p>Real Reviews from Real Customers</p>
        </div>

        <div className="reviews-header fade-in">
          <div className="overall-rating">
            <div className="rating-number">{averageRating}</div>
            <div>
              <div className="stars">{renderStars(Math.round(parseFloat(averageRating)))}</div>
              <p style={{margin: 0, color: 'var(--muted)'}}>
                Based on reviews
              </p>
            </div>
          </div>
        </div>

        <div className="reviews-slider fade-in">
          <div className="reviews-track">
            {sliderReviews.map((review, index) => (
              <div key={`${review.name}-${index}`} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">
                    {review.initials}
                  </div>
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    <div className="review-stars">{renderStars(review.rating)}</div>
                    <p style={{fontSize: '0.85rem', color: 'var(--grey)', margin: 0}}>
                      {review.date}
                    </p>
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in" style={{textAlign: 'center', marginTop: '3rem'}}>
          <p style={{marginBottom: '1.5rem', fontSize: '1.1rem'}}>
            Want to leave a review? We'd love to hear from you!
          </p>
          <a 
            href="https://search.google.com/local/writereview?placeid=ChIJO_p5qlyHXjkRiIM44ZYYcB8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Write a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;