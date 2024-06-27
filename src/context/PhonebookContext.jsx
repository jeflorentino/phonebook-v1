import React, { createContext } from 'react';

const PhonebookContext = createContext();

export const PhonebookProvider = ({ children }) => {
  return (
    <PhonebookContext.Provider value={{}}>
      {children}
    </PhonebookContext.Provider>
  );
};

export default PhonebookContext;