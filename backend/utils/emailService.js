const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});


const sendContactEmail = async (contactData) => {
  try {
    
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${contactData.phone}">${contactData.phone}</a></p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #D4AF37; border-radius: 4px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${contactData.message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            This is an automated email from your website's contact form.
          </p>
        </div>
      `,
    };

    
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: contactData.email, 
      subject: 'We Received Your Message - Thank You for Contacting Us!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">Thank You for Contacting Us!</h2>
          
          <p style="color: #333; font-size: 16px;">Hi ${contactData.name},</p>
          
          <p style="color: #666; line-height: 1.6;">
            We have received your contact form submission and appreciate you reaching out to us. Your message is important to us, and we will get back to you as soon as possible.
          </p>

          <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #D4AF37; border-radius: 4px;">
            <h3 style="color: #333; margin-top: 0;">Your Information:</h3>
            <p style="color: #666;"><strong>Name:</strong> ${contactData.name}</p>
            <p style="color: #666;"><strong>Email:</strong> ${contactData.email}</p>
            <p style="color: #666;"><strong>Phone:</strong> ${contactData.phone}</p>
          </div>

          <p style="color: #666; line-height: 1.6;">
            If you have any urgent matters, please feel free to contact us directly. We typically respond to inquiries within 24-48 hours during business days.
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error(`Email service error: ${error.message}`);
  }
};

module.exports = {
  sendContactEmail,
};
