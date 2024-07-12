import React, { useState } from 'react';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

const ContactCard = ({ contact, onDelete, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNoteClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="flex items-center gap-6 bg-white rounded-xl pl-4 shadow-lg h-24 hover:transform hover:translate-y-1 transition-transform duration-300"
        onClick={() => onEdit(contact)}
      >
        <div className="flex flex-grow items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600">{formatPhoneNumber(contact.phone_number)}</p>
          </div>
          <div className="flex-1">
            <p
              className="text-sm text-blue-500 cursor-pointer underline"
              onClick={handleNoteClick}
            >
              Ver Nota
            </p>
          </div>
        </div>
        <div className="ml-auto h-full transition duration-500">
        <button
          className="h-full px-4 text-sm text-red-500 bg-white border-none rounded-r-lg focus:outline-none hover:bg-red-500 hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(contact.id);
          }}
        >
          Deletar
        </button>
      </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-3/4 max-w-lg shadow-xl overflow-y-auto max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Nota Completa</h2>
            <p className="text-sm text-gray-600">{contact.notes}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-700 transition-colors duration-300"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCard;