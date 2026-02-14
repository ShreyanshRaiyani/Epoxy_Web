// Load environment variables FIRST - before any other requires
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/reviews', reviewsRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Epoxy Flooring API',
    version: '1.0.0',
    endpoints: {
      contact: {
        post: '/api/contact - Submit contact form',
        get: '/api/contact - Get all contacts',
      },
      reviews: {
        get: '/api/reviews - Get Google reviews',
      },
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});