import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      alert(`Searching for: ${query}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search students or courses..."
          aria-label="Search students or courses"
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
