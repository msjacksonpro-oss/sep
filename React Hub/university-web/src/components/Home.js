import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">🏫 Welcome to University Hub</h1>
        <p className="hero-subtitle">
          Your complete solution for managing students, courses, and academic activities all in one place
        </p>
        <div className="hero-buttons">
          <Link to="/students" className="hero-btn hero-btn-primary">Explore Students</Link>
          <Link to="/courses" className="hero-btn hero-btn-secondary">View Courses</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-heading">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Student Management</h3>
              <p>Easily manage student profiles, track academic progress, and maintain comprehensive student records.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Course Management</h3>
              <p>Create, organize, and manage courses with detailed information and credit allocation.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics & Insights</h3>
              <p>Get real-time data on student enrollment, course popularity, and academic metrics.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Smart Notifications</h3>
              <p>Stay updated with instant notifications about course registrations and important academic events.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Registration System</h3>
              <p>Streamlined course registration process with real-time availability and conflict detection.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Real-time Updates</h3>
              <p>Live tracking of class attendance, course schedules, and academic calendar updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h4>Active Students</h4>
            <p className="stat-number">2,500+</p>
          </div>
          <div className="stat-item">
            <h4>Available Courses</h4>
            <p className="stat-number">150+</p>
          </div>
          <div className="stat-item">
            <h4>Faculty Members</h4>
            <p className="stat-number">200+</p>
          </div>
          <div className="stat-item">
            <h4>Success Rate</h4>
            <p className="stat-number">98%</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-text">
            Join thousands of students and educators who are already using University Hub to enhance their academic experience.
          </p>
          <div className="cta-buttons">
            <Link to="/students" className="cta-btn cta-btn-primary">Browse Students</Link>
            <Link to="/about" className="cta-btn cta-btn-secondary">Learn More About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;