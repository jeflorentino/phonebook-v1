import React from 'react';
import ContactCard from './ContactCard';

const RecentAdditions = ({ contacts, onEdit }) => {
  const sortedContacts = contacts
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);

  return (
    <div className="w-full p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Recent Additions</h2>
      <div className="flex flex-col gap-6">
        {sortedContacts.map(contact => (
          <ContactCard
          key={contact.id}
          contact={contact}
          onEdit={onEdit}
        />
        ))}
      </div>
    </div>
  );
};

export default RecentAdditions;
