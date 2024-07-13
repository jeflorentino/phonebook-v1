import React from 'react';
import ContactCircle from './ContactCircle';

const RecentAdditions = ({ contacts, onEdit }) => {
  const sortedContacts = contacts
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 6);  

  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Últimos adicionados</h2>
      {sortedContacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sortedContacts.map(contact => (
            <ContactCircle
              key={contact.id}
              contact={contact}
              onEdit={onEdit}
            />
          ))}
        </div>
      ) : (
        <p>Ainda não tem contatos salvos na sua lista</p>
      )}
    </div>
  );
};

export default RecentAdditions;
