import React, { useState, useEffect } from 'react';
import AddContactForm from '../components/AddContactForm';
import RecentAdditions from '../components/RecentAdditions';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { getContacts, updateContact, deleteContact } from '../services/api';

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


  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    } catch (error) {
      setError('Failed to delete contact');
    }
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

  const hasData = contacts.length > 0;

  return (
    <div className="max-w-5xl max-lg:max-w-3xl mx-auto my-6">
      <div className='w-full h-20'>
        <header className="text-center bg-gray-800 p-8 md:py-16 relative">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-yellowzim-primary text-4xl md:text-5xl font-bold text-center">YellowZim</h1>

          </div>
        </header>
        <div className="bg-white">
          <div className="flex flex-col md:flex-row justify-center gap-10 p-2 rounded-lg mt-12">
            <div className='w-full md:w-1/2 p-4'>
              <AddContactForm
                onAdd={handleAdd}
                onUpdate={handleUpdate}
                editingContact={editingContact}
                setEditingContact={setEditingContact}
              />
            </div>
            <div className='rounded-lg w-full md:w-1/2 p-4'>
              <RecentAdditions
                contacts={contacts}
                onEdit={handleEdit}
                onDelete={handleDelete} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-4">
          <div className='justify-center py-2 px-5 rounded-lg my-8'>
          <Filter
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            hasData={hasData} />

          </div>
          <div className='justify-center py-2 rounded-lg'>
          <ContactList
            contacts={contacts}
            searchTerm={searchTerm}
            onEdit={handleEdit}
            onDelete={handleDelete} />

          </div>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Home;