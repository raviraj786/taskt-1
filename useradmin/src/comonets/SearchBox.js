import React, { useState } from 'react';

const SearchBox = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchChange(value); // Callback to parent component
  };

  return (
    <div className="mb-4">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 rounded-md border"
        placeholder="Search products"
      />
    </div>
  );
};

export default SearchBox;
