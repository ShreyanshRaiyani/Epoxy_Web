const axios = require('axios');

// Fetch reviews from Google Places API
const fetchGoogleReviews = async () => {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!placeId || !apiKey || apiKey === 'your-google-places-api-key') {
      console.warn('Google Places API credentials not configured');
      return null;
    }

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          place_id: placeId,
          key: apiKey,
          fields: 'reviews,rating,user_ratings_total'
        }
      }
    );

    if (response.data.result && response.data.result.reviews) {
      // Transform Google reviews to match our format
      return response.data.result.reviews.map((review) => ({
        name: review.author_name,
        rating: review.rating,
        date: formatDate(review.time * 1000), // Convert timestamp to milliseconds
        text: review.text,
        initials: review.author_name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .substring(0, 2)
          .toUpperCase(),
        source: 'Google',
      }));
    }

    return null;
  } catch (error) {
    console.error('Error fetching Google reviews:', error.message);
    return null;
  }
};

// Format date from timestamp
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-US', options);
};

module.exports = {
  fetchGoogleReviews,
};
