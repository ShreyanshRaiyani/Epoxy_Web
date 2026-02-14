# Vala Epoxy & Grouting Services Website

A modern, full-stack web application for premium epoxy flooring and tile grouting services based in Ahmedabad, Gujarat.

## 🌟 Features

### Frontend Features
- **Responsive Design** - Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Scroll-triggered animations with fade-in, slide, and scale effects
- **Interactive Gallery** - Tabbed gallery with two categories (Epoxy Flooring & Grouting Work) featuring lightbox view
- **Auto-Scrolling Reviews** - Infinite horizontal review carousel with pause-on-hover functionality
- **Contact Form** - Form with validation, API integration, and real-time success/error feedback
- **Client Showcase** - Display of 8 trusted clients (Adani, Amazon, Cadila, Highly, Man, Navy, Decathlon, Palladium)
- **Service Cards** - 6 detailed service offerings with animated icons
- **Google Maps Integration** - Embedded location map
- **Social Media Links** - Facebook, Instagram, and X (Twitter) integration
- **WhatsApp Integration** - Direct WhatsApp contact button
- **Statistics Display** - Company achievements and numbers
- **Sticky Navigation** - Navbar with scroll effect and mobile menu

### Backend Features
- **Contact Form API** - RESTful API endpoint for contact form submissions
- **Dual Email System** - Sends admin notification and customer confirmation emails
- **MongoDB Storage** - Stores all contact inquiries in database
- **Input Validation** - Server-side validation with detailed error messages
- **Gmail SMTP Integration** - Professional email delivery using Gmail
- **CORS Support** - Configured for cross-origin requests
- **Error Handling** - Comprehensive error handling and logging

### Gallery Features
- **Epoxy Flooring Gallery** - 12 professional project photos
- **Grouting Work Gallery** - 12 grouting project photos
- **Lightbox View** - Click to view images in full screen with responsive sizing
- **Organized Folders** - Images organized in separate folders for easy management

## 🛠️ Tech Stack

**Frontend:** React, CSS3, Axios  
**Backend:** Node.js, Express.js, MongoDB, Nodemailer  
**Tools:** dotenv, express-validator, CORS

## 🚀 Getting Started

**Install Dependencies**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```



### Running the Application

1. **Start MongoDB** (if using local MongoDB)
```bash
mongod
```

2. **Start Backend Server**
```bash
cd backend
npm start
```
Backend will run on `http://localhost:5000`

3. **Start Frontend** (in a new terminal)
```bash
cd frontend
npm start
```
Frontend will run on `http://localhost:3000`

The website will automatically open in your browser at `http://localhost:3000`

## 📧 Email Service

When a user submits the contact form:
- **Admin Email** is sent to business email with contact details
- **Customer Email** is sent to customer with branded confirmation message

Both emails include company branding and contact information.




---

© 2026 Vala Epoxy & Grouting Services. All rights reserved.
