import React from 'react';
import ContactCircle from './ContactCircle';

const RecentAdditions = ({ contacts, onEdit }) => {
  const sortedContacts = contacts
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 6);  

  return (
    <div className="mx-auto mt-8 rounded-lg p-6 shadow-2xl min-h-[340px] bg-white">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-dark">Últimos adicionados</h2>
      {sortedContacts.length > 0 ? (
        <div className="grid grid-cols-3 gap-6 overflow-x-auto">
          {sortedContacts.map(contact => (
            <ContactCircle
              key={contact.id}
              contact={contact}
              onEdit={onEdit}
            />
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-medium">Ainda não tem contatos salvos na sua lista</p>
      )}
    </div>
  );
};

export default RecentAdditions;
