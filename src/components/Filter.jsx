import React from 'react';

const Filter = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={onSearchChange}
      className="w-full p-2 mb-4 border border-gray-300 rounded-md"
    />
  );
};

export default Filter;