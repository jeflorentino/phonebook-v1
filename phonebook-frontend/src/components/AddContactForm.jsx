import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import { addContact } from '../services/api';

const AddContactForm = ({ onAdd, onUpdate, editingContact, setEditingContact }) => {
  const [name, setName] = useState('');
  const [phone_number, setPhone] = useState('');
  const [valid_phone, setValid] = useState(true);
  const [notes, setNotes] = useState('');
  const [notesError, setNotesError] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone_number);
      setNotes(editingContact.notes || '');
    } else {
      setName('');
      setPhone('');
      setNotes('');
    }
  }, [editingContact]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingContact) {
      try {
        await onUpdate({ ...editingContact, name, phone_number, notes });
        setEditingContact(null);
      } catch (error) {
        console.error('Failed to update contact', error);
      }
    } else {
      try {
        const newContact = await addContact({ name, phone_number, notes });
        onAdd(newContact);
        setName('');
        setPhone('');
        setNotes('');
      } catch (error) {
        console.error('Failed to add contact', error);
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setValid(validatePhoneNumber(value));
  };

  const handleNotesChange = (e) => {
    const { value } = e.target;
    if (value.length <= 140) {
      setNotes(value);
      setNotesError('');
    } else {
      setNotesError('Notas não podem exceder 140 caracteres');
    }
  };

  const validatePhoneNumber = (phone_number) => {
    const cleaned = ('' + phone_number).replace(/\D/g, '');

    const isBrazilian = cleaned.startsWith('55');
    const isAmerican = cleaned.startsWith('1');

    if (isBrazilian) {
      if (cleaned.length === 13 && cleaned[4] === '9') { // Número móvel
        return true;
      } else if (cleaned.length === 12 && cleaned[4] !== '9') { // Número fixo
        return true;
      } else {
        return false;
      }
    } else if (isAmerican && cleaned.length === 11) {
      return true;
    } else {
      return false;
    }
  };

  const isFormValid = valid_phone && name && notes.length <= 140;

  return (
    <div className="mx-auto mt-8 bg-white rounded-lg p-6 shadow-2xl space-y-4 min-h-[340px]">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-dark">
        {editingContact ? 'Editar contato' : 'Adicionar contato'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <PhoneInput
            country={'us'}
            onlyCountries={['us', 'br']}
            value={phone_number}
            onChange={handlePhoneChange}
            inputProps={{
              required: true,
              'aria-label': 'phone-input'
            }}
          />
          {!valid_phone && <p className="text-red-500">Número inválido.</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Digite o nome"
            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellowzim-primary focus:ring-yellowzim-primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Nome"
          />
        </div>
        <div className="mb-4">
          <textarea
            type="text"
            placeholder="Digite"
            className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-yellowzim-primary focus:ring-yellowzim-primary"
            value={notes}
            onChange={handleNotesChange}
            aria-label="Notas"
          />
          {notesError && <p className="text-red-500">{notesError}</p>}
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className={`bg-yellowzim-primary hover:bg-yellowzim-secondary text-black font-bold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellowzim-primary disabled:bg-gray-400 disabled:cursor-not-allowed`}
            disabled={!isFormValid}
          >
            {editingContact ? 'Atualizar' : 'Adicionar'}
          </button>
          {editingContact && (
            <button
              type="button"
              className="bg-gray-light hover:bg-gray-medium text-black font-bold py-2 px-4 rounded"
              onClick={handleCancelEdit}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
