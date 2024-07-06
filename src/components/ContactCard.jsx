import React from 'react';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

const ContactCard = ({ contact, onDelete, onEdit }) => {
  return (
    <div
      className="flex items-center gap-6 bg-white rounded-xl pl-4"
      onClick={() => onEdit(contact)}
    >
      <div className="flex flex-grow items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{contact.name}</h3>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-600">{formatPhoneNumber(contact.phone_number)}</p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-600">{contact.notes || 'N/A'}</p>
        </div>
      </div>
      <div className="ml-auto rounded-l-none rounded-r-lg transition duration-500">
        <button
          className="px-2 py-8 text-sm text-red-500 bg-white border-none rounded-l-none rounded-r-lg focus:outline-none hover:bg-red-600 hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(contact.id);
          }}
        >
          Deletar
        </button>
      </div>
    </div>
  );
};

export default ContactCard;