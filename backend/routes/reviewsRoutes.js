const express = require('express');
const router = express.Router();
const { fetchGoogleReviews } = require('../controllers/reviewsController');

router.get('/', fetchGoogleReviews);

module.exports = router;
