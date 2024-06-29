import React from 'react';

const ContactCard = ({ contact }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-between">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{contact.name}</h3>
        <p className="text-sm text-gray-600">{contact.phone_number}</p>
        <p className="text-sm text-gray-600">{contact.notes || 'N/A'}</p>
      </div>
      <div className="flex space-x-4">
        <button className="text-blue-500 border-2">
          Update
        </button>
        <button className="text-red-500 border-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;