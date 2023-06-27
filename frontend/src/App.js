import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform your search logic here
    console.log('Searching for:', query);
    // Reset the query state
    setQuery('');
  };

  return (
    <div className="app">
      <h1>App</h1>
      <form onSubmit={handleFormSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default App;
