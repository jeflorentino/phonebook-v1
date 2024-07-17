import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactCard from './ContactCard';

jest.mock('../utils/formatPhoneNumber', () => ({
    formatPhoneNumber: jest.fn((phoneNumber) => phoneNumber),
}));

const contact = {
    id: 1,
    name: 'John Doe',
    phone_number: '12345678900',
    notes: 'This is a note.',
};

describe('ContactCard', () => {
    it('renders contact information correctly', () => {
        render(<ContactCard contact={contact} onDelete={jest.fn()} onEdit={jest.fn()} />);

        expect(screen.getByText(contact.name)).toBeInTheDocument();
        expect(screen.getByText(contact.phone_number)).toBeInTheDocument();
        expect(screen.getByText('Ver Nota')).toBeInTheDocument();
    });

    it('calls onEdit when card is clicked', () => {
        const onEdit = jest.fn();
        render(<ContactCard contact={contact} onDelete={jest.fn()} onEdit={onEdit} />);

        fireEvent.click(screen.getByText(contact.name));
        expect(onEdit).toHaveBeenCalledWith(contact);
    });

    it('calls onDelete when delete button is clicked', () => {
        const onDelete = jest.fn();
        render(<ContactCard contact={contact} onDelete={onDelete} onEdit={jest.fn()} />);

        fireEvent.click(screen.getByText('Deletar'));
        expect(onDelete).toHaveBeenCalledWith(contact.id);
    });

    it('opens modal when "Ver Nota" is clicked', () => {
        render(<ContactCard contact={contact} onDelete={jest.fn()} onEdit={jest.fn()} />);

        fireEvent.click(screen.getByText('Ver Nota'));
        expect(screen.getByText('Nota Completa')).toBeInTheDocument();
        expect(screen.getByText(contact.notes)).toBeInTheDocument();
    });

    it('closes modal when "Fechar" button is clicked', () => {
        render(<ContactCard contact={contact} onDelete={jest.fn()} onEdit={jest.fn()} />);

        fireEvent.click(screen.getByText('Ver Nota'));
        fireEvent.click(screen.getByText('Fechar'));
        expect(screen.queryByText('Nota Completa')).not.toBeInTheDocument();
    });
});

