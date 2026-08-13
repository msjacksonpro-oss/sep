import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>University Hub Portal</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
      </nav>
    </header>
  );
}

export default Header;
