import React from 'react';

const Filter = ({ searchTerm, onSearchChange, hasData }) => {
  return (
    <input
      type="text"
      placeholder="Pesquise aqui"
      value={searchTerm}
      onChange={onSearchChange}
      disabled={!hasData}
      className={`w-full px-4 py-3 rounded-lg p-2 border border-gray-300 outline-yellowzim-primary focus:ring-yellowzim-primary ${!hasData ? 'cursor-not-allowed bg-yellowzim-primary' : 'bg-white'}`}
      aria-label="Campo de busca"
    />
  );
};

export default Filter;