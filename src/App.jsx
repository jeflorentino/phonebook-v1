import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PhonebookProvider } from './context/PhonebookContext';

const App = () => {
  return (
    <PhonebookProvider>
      <Router>
        {/* ROTAS */}
      </Router>
    </PhonebookProvider>
  );
};

export default App;