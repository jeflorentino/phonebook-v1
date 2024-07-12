import React from 'react';

const Filter = ({ searchTerm, onSearchChange, hasData }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={onSearchChange}
      disabled={!hasData}
      className={`w-full p-2 mb-4 border border-gray-300 rounded-md ${!hasData && 'cursor-not-allowed bg-gray-100'}`}
    />
  );
};

export default Filter;