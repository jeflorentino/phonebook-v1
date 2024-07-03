import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { addContact } from '../services/api';

const AddContactForm = ({ onAdd, onUpdate, editingContact, setEditingContact }) => {
  const [name, setName] = useState('');
  const [phone_number, setPhone] = useState('');
  const [valid_phone, setValid] = useState(true);
  const [notes, setNotes] = useState('');

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
    if (!valid_phone) {
      alert('Número de telefone inválido');
      return;
    }

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

  const validatePhoneNumber = (phone_number) => {
    const phoneNumberPattern = /^(55\d{11}|1\d{10})$/;
    return phoneNumberPattern.test(phone_number);
  };

  return (
    <div className="w-1/2 p-4 bg-white shadow-md mr-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <PhoneInput
            country={'us'}
            onlyCountries={['us', 'br']}
            masks={{us: '(...) ...-....', br: '(..) . ....-....'}}
            value={phone_number}
            onChange={handlePhoneChange}
            inputProps={{
              required: true,
            }}
          />
          {!valid_phone && <p className="text-red-500">Número inválido.</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Digite o nome"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            type="text"
            placeholder="Digite"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            {editingContact ? 'Atualizar' : 'Adicionar'}
          </button>
          {editingContact && (
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
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