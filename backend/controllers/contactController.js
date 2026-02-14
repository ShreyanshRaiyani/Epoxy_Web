const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');
const { sendContactEmail } = require('../utils/emailService');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, phone, email, message } = req.body;

    // Create new contact submission
    const contact = await Contact.create({
      name,
      phone,
      email,
      message,
    });

    // Send emails if email service is configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      try {
        await sendContactEmail({
          name,
          phone,
          email,
          message,
        });
      } catch (emailError) {
        console.error('❌ Failed to send email:');
        console.error('   Error:', emailError.message);
        console.error('   Code:', emailError.code);
        console.error('   Command:', emailError.command);
        // Continue even if email fails - contact is still saved
      }
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
      },
    });
  } catch (error) {
    console.error('Error in submitContactForm:', error);

    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// @desc    Get all contact submissions (admin)
// @route   GET /api/contact
// @access  Public (should be protected in production)
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error('Error in getAllContacts:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts,
};