import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PhonebookProvider } from './context/PhonebookContext';
import Home from './pages/Home';

const App = () => {
  return (
    <PhonebookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </PhonebookProvider>
  );
};

export default App;