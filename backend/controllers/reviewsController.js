const axios = require('axios');

const fetchGoogleReviews = async (req, res) => {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return res.status(500).json({
        success: false,
        message: 'Google Places API configuration is missing.',
      });
    }

    const fields = 'rating,user_ratings_total,reviews';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&reviews_sort=newest&key=${apiKey}`;

    const response = await axios.get(url, { timeout: 10000 });
    const data = response.data;

    if (data.status !== 'OK') {
      return res.status(502).json({
        success: false,
        message: data.error_message || 'Failed to fetch Google reviews.',
        status: data.status,
      });
    }

    const result = data.result || {};

    return res.status(200).json({
      success: true,
      data: {
        rating: result.rating || 0,
        userRatingsTotal: result.user_ratings_total || 0,
        reviews: result.reviews || [],
      },
    });
  } catch (error) {
    console.error('Error in fetchGoogleReviews:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching reviews.',
    });
  }
};

module.exports = {
  fetchGoogleReviews,
};
