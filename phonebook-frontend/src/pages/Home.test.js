import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { getContacts, addContact, updateContact, deleteContact } from '../services/api';

jest.mock('../services/api');

const mockContacts = [
    { id: 1, name: 'John Doe', phone_number: '12345678900', created_at: '2023-07-10T12:00:00Z', notes: 'johndoe@example.com' },
    { id: 2, name: 'Dina Smith', phone_number: '5514987654321', created_at: '2023-07-11T12:00:00Z', notes: '' },
];

const renderHome = () => {
    render(<Home />);
};

describe('Home', () => {
    beforeEach(() => {
        getContacts.mockResolvedValue(mockContacts);
        addContact.mockResolvedValue(mockContacts[0]);
        updateContact.mockResolvedValue(mockContacts[0]);
        deleteContact.mockResolvedValue({});
    });

    it('renders initial components and state', async () => {
        renderHome();

        expect(screen.getByText('Yellowzim')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Digite o nome')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Digite')).toBeInTheDocument();
        const addButton = screen.getByRole('button', { name: /Adicionar/i });
        expect(addButton).toBeInTheDocument();
        expect(addButton).toBeDisabled();

        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Ainda não tem contatos salvos na sua lista')).toBeInTheDocument();
        });
    });

    it('should display an error message on fetch failure', async () => {
        getContacts.mockRejectedValueOnce(new Error('Failed to fetch contacts'));
        render(<Home />);
        await waitFor(() => expect(screen.getByText(/Failed to fetch contacts/i)).toBeInTheDocument());
    });

    it('should filter contacts based on the search term', async () => {
        renderHome();

        fireEvent.change(screen.getByPlaceholderText('Search'), {
            target: { value: 'Dina' },
        });

        await waitFor(() => {
            const contactNameDina = screen.getByText('Dina Smith', { selector: 'h3' });
            expect(contactNameDina).toBeInTheDocument();

            const contactNameJohn = screen.queryByText('John Doe', { selector: 'h3' });
            expect(contactNameJohn).not.toBeInTheDocument();
        });
    });
});
