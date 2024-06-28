import React from 'react';

const AddContactForm = () => {
  return (
    <div class="w-1/2 p-4 bg-white shadow-md mr-4">
      <form>
        <div class="mb-4">
          <input type="text" placeholder="Digite o nome" class="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div class="mb-4">
          <input type="text" placeholder="Digite o telefone" class="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label>Notas</label>
          <textarea type="text" placeholder="Digite" class="w-full p-2 border border-gray-300 rounded-md"/>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddContactForm;