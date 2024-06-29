import React, { useEffect, useState } from 'react';
import { getContacts } from '../services/api';
import ContactCard from './ContactCard';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
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

  return (
    <div className="w-full p-4 bg-gray-100 min-h-screen">
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-col gap-6">
        {contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;