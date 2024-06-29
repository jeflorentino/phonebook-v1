import React, { useState, useEffect } from 'react';
import AddContactForm from '../components/AddContactForm';
import RecentAdditions from '../components/RecentAdditions';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { getContacts } from '../services/api';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContacts();
        setContacts(data);
      } catch (error) {
        setError('Failed to fetch contacts');
      }
    };

    fetchContacts();
  }, []);

  const handleAdd = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-8 text-yellowzim-primary">Yellowzim</h1>
      </header>
      <div className="bg-gray-100">
        <div className="flex justify-between mb-6">
          <AddContactForm onAdd={handleAdd} />
          <RecentAdditions contacts={contacts} />
        </div>
        <div className="w-full p-4 bg-white shadow-md">
          <Filter searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <ContactList contacts={contacts} searchTerm={searchTerm}/>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Home;