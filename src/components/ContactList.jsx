import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, searchTerm }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      {filteredContacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default ContactList;