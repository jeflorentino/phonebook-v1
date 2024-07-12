import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddContactForm from './AddContactForm';
import { addContact, updateContact } from '../services/api';

jest.mock('../services/api');

describe('AddContactForm Component', () => {
    const mockOnAdd = jest.fn();
    const mockOnUpdate = jest.fn();
    const mockSetEditingContact = jest.fn();

    beforeEach(() => {
        mockOnAdd.mockClear();
        mockOnUpdate.mockClear();
        mockSetEditingContact.mockClear();
    });

    test('renders AddContactForm', () => {
        render(
            <AddContactForm
                onAdd={mockOnAdd}
                onUpdate={mockOnUpdate}
                editingContact={null}
                setEditingContact={mockSetEditingContact}
            />
        );

        expect(screen.getByPlaceholderText('Digite o nome')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Digite')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Adicionar/i })).toBeInTheDocument();
    });

    test('disables submit button when phone number is invalid or name is empty', () => {
        render(
            <AddContactForm
                onAdd={mockOnAdd}
                onUpdate={mockOnUpdate}
                editingContact={null}
                setEditingContact={mockSetEditingContact}
            />
        );

        expect(screen.getByRole('button', { name: /Adicionar/i })).toBeDisabled();

        fireEvent.change(screen.getByLabelText('phone-input'), {
            target: { value: '15551239876' },
        });
        
        expect(screen.getByRole('button', { name: /Adicionar/i })).toBeDisabled();

        fireEvent.change(screen.getByPlaceholderText('Digite o nome'), {
            target: { value: 'John Doe' },
        });

        expect(screen.getByRole('button', { name: /Adicionar/i })).not.toBeDisabled();
    });

    test('adds a new contact', async () => {
        const newContact = {
            id: 3,
            name: 'Alice Johnson',
            phone_number: '15551239876',
            notes: 'New Friend',
        };

        addContact.mockResolvedValue(newContact);

        render(
            <AddContactForm
                onAdd={mockOnAdd}
                onUpdate={mockOnUpdate}
                editingContact={null}
                setEditingContact={mockSetEditingContact}
            />
        );

        fireEvent.change(screen.getByPlaceholderText('Digite o nome'), {
            target: { value: newContact.name },
        });
        fireEvent.change(screen.getByPlaceholderText('Digite'), {
            target: { value: newContact.notes },
        });

        fireEvent.change(screen.getByLabelText('phone-input'), {
            target: { value: newContact.phone_number },
        });

        fireEvent.click(screen.getByRole('button', { name: /Adicionar/i }));

        await waitFor(() => expect(mockOnAdd).toHaveBeenCalledWith(newContact));
    });

    test('edits a contact', async () => {
        const editingContact = {
            id: 1,
            name: 'John Doe',
            phone_number: '123-456-7890',
            notes: 'Friend',
        };

        render(
            <AddContactForm
                onAdd={mockOnAdd}
                onUpdate={mockOnUpdate}
                editingContact={editingContact}
                setEditingContact={mockSetEditingContact}
            />
        );

        fireEvent.change(screen.getByPlaceholderText('Digite o nome'), {
            target: { value: 'Johnathan Doe' },
        });

        fireEvent.click(screen.getByRole('button', { name: /Atualizar/i }));

        await waitFor(() =>
            expect(mockOnUpdate).toHaveBeenCalledWith({
                ...editingContact,
                name: 'Johnathan Doe',
            })
        );
    });

    test('validates phone number', () => {
        render(
            <AddContactForm
                onAdd={mockOnAdd}
                onUpdate={mockOnUpdate}
                editingContact={null}
                setEditingContact={mockSetEditingContact}
            />
        );

        fireEvent.change(screen.getByLabelText('phone-input'), {
            target: { value: '123' },
        });

        fireEvent.click(screen.getByRole('button', { name: /Adicionar/i }));

        expect(screen.getByText('Número inválido.')).toBeInTheDocument();
    });

    test('cancels editing contact', () => {
        const editingContact = {
            id: 1,
            name: 'John Doe',
            phone_number: '123-456-7890',
            notes: 'Friend',
        };

        render(
            <AddContactForm
                onAdd={mockOnAdd}
                onUpdate={mockOnUpdate}
                editingContact={editingContact}
                setEditingContact={mockSetEditingContact}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /Cancelar/i }));

        expect(mockSetEditingContact).toHaveBeenCalledWith(null);
    });
});
