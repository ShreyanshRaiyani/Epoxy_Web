const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {
  submitContactForm,
  getAllContacts,
} = require('../controllers/contactController');

// Validation middleware
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[\d\s\+\-\(\)]+$/)
    .withMessage('Please provide a valid phone number'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ max: 1000 })
    .withMessage('Message cannot exceed 1000 characters'),
];

// Routes
router.post('/', contactValidation, submitContactForm);
router.get('/', getAllContacts);

module.exports = router;