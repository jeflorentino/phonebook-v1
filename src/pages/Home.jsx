import React, { useState } from 'react';
import AddContactForm from '../components/AddContactForm';
import RecentAdditions from '../components/RecentAdditions';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const Home = () => {
  const [contacts, setContacts] = useState([]);

  const handleAdd = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
    <header className="mb-6">
    <h1 className="text-4xl font-bold mb-8 text-yellowzim-primary">Yellowzim</h1>
    </header>
    <div className="bg-gray-100">
        <div className="flex justify-between mb-6">
            <AddContactForm onAdd={handleAdd} />
            <RecentAdditions />
        </div>
        <div className="w-full p-4 bg-white shadow-md">
            <Filter />
            <ContactList />
        </div>
    </div>
    </div>
  );
};

export default Home;