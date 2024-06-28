import React from 'react';

const ContactList = () => {
  return (
    <div class="w-full p-4 bg-white shadow-md">
      <div class="mb-4">
        <p>Name: John Doe</p>
        <p>Phone: 123-456-7890</p>
        <p>Notes: Notes about John Doe</p>
        <button>Editar</button>
        <button>Deletar</button>
      </div>
      {/* Repita para mais contatos */}
    </div>
  );
};

export default ContactList;