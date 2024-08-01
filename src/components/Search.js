// src/components/Search.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Ensure you import the CSS file

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        className="form-control search-input"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={handleInputChange}
      />
      <button className="btn search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
