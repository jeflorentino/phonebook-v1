import React, { useState, useEffect } from 'react';
import AddContactForm from '../components/AddContactForm';
import RecentAdditions from '../components/RecentAdditions';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { getContacts, updateContact } from '../services/api';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [editingContact, setEditingContact] = useState(null);

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

  const handleUpdate = async (updatedContact) => {
    try {
      const updatedData = await updateContact(updatedContact.id, updatedContact);
      setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedData : contact)));
      setEditingContact(null);
    } catch (error) {
      setError('Failed to update contact');
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-8 text-yellowzim-primary">Yellowzim</h1>
      </header>
      <div className="bg-gray-100">
        <div className="flex justify-between mb-6">
          <AddContactForm
            onAdd={handleAdd}
            onUpdate={handleUpdate}
            editingContact={editingContact}
            setEditingContact={setEditingContact}
          />
          <RecentAdditions contacts={contacts} onEdit={handleEdit}/>
        </div>
        <div className="w-full p-4 bg-white shadow-md">
          <Filter searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <ContactList contacts={contacts} searchTerm={searchTerm} onEdit={handleEdit} />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Home;