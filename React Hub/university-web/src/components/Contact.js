import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="eyebrow">University Hub</span>
          <h1>We’re here to help</h1>
          <p>
            Reach out for admissions guidance, platform support, or partnership opportunities.
            Our team responds quickly and is happy to assist.
          </p>
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h2>Contact Information</h2>
          <p>Let us know how we can support your academic goals.</p>
          <ul className="contact-list">
            <li><strong>Email:</strong> support@universityhub.edu</li>
            <li><strong>Phone:</strong> +1 (555) 014-2048</li>
            <li><strong>Office Hours:</strong> Mon–Fri, 8:00 AM – 6:00 PM</li>
            <li><strong>Location:</strong> 120 Campus Avenue, Suite 400</li>
          </ul>
        </div>

        <form className="contact-form">
          <h2>Send a Message</h2>
          <p>Share a few details and we’ll get back to you shortly.</p>

          <div className="form-row">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>

          <label>
            Subject
            <input type="text" placeholder="How can we help?" />
          </label>

          <label>
            Message
            <textarea rows="5" placeholder="Tell us more about your inquiry..." />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;