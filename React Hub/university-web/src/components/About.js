import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="about-header">
        <h1>About University Hub</h1>
        <p>Revolutionizing academic management through innovative technology and user-centered design</p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-title">Our Mission</div>
        <div className="mission-content">
          <div className="mission-text">
            <p>
              At University Hub, our mission is to simplify and enhance the academic experience for students, 
              faculty, and administrators. We believe that technology should empower education, not complicate it.
            </p>
            <p>
              We're committed to providing a seamless, intuitive platform that streamlines student management, 
              course administration, and academic planning for modern educational institutions.
            </p>
            <p>
              Through continuous innovation and user feedback, we're building the future of academic management systems.
            </p>
          </div>
          <div className="mission-icon">🎯</div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-title">Our Core Values</div>
          <div className="values-grid">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our platform, from user interface to backend performance.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Continuous improvement and adoption of cutting-edge technologies to serve our users better.</p>
            </div>
            <div className="value-card">
              <h3>Reliability</h3>
              <p>Rock-solid infrastructure and dependable service that educational institutions can count on.</p>
            </div>
            <div className="value-card">
              <h3>User-Centric</h3>
              <p>Every feature is designed with our users in mind, ensuring intuitive and practical solutions.</p>
            </div>
            <div className="value-card">
              <h3>Security</h3>
              <p>Enterprise-grade security measures to protect sensitive academic and personal data.</p>
            </div>
            <div className="value-card">
              <h3>Transparency</h3>
              <p>Open communication with our users and stakeholders about platform updates and improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-title">Meet Our Team</div>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-avatar">👨‍💼</div>
              <h4>Dr. James Wilson</h4>
              <div className="team-member-role">Founder & CEO</div>
              <p>20+ years in educational technology with a passion for transforming academic institutions.</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">👩‍💻</div>
              <h4>Sarah Chen</h4>
              <div className="team-member-role">Lead Developer</div>
              <p>Full-stack developer specializing in scalable educational platforms and React.js architecture.</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">👨‍🎓</div>
              <h4>Prof. Michael Anderson</h4>
              <div className="team-member-role">Education Consultant</div>
              <p>Decades of academic leadership ensuring our platform meets real educational needs.</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">👩‍🔧</div>
              <h4>Emma Rodriguez</h4>
              <div className="team-member-role">UX/UI Designer</div>
              <p>Creative designer focused on making complex academic workflows simple and beautiful.</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">👨‍💼</div>
              <h4>David Kumar</h4>
              <div className="team-member-role">Product Manager</div>
              <p>Strategic thinker driving product innovation based on user research and market trends.</p>
            </div>
            <div className="team-member">
              <div className="team-member-avatar">👩‍💼</div>
              <h4>Lisa Thompson</h4>
              <div className="team-member-role">Customer Success Lead</div>
              <p>Dedicated to ensuring every institution gets maximum value from University Hub.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-text">
            Have questions about University Hub? Want to schedule a demo or discuss partnership opportunities? 
            We'd love to hear from you!
          </p>
          <button className="contact-btn" onClick={() => alert('Contact page coming soon!')}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;