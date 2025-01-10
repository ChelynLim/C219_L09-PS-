import React, { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // Implement search functionality here
  };

  return (
    <div className="search-bar container">
      <input
        type="text"
        placeholder="Search for diplomas or courses..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}