import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactList from './ContactList';

const contacts = [
    { id: 1, name: 'John Doe', phone_number: '12345678901', notes: 'This is a note.' },
    { id: 2, name: 'Jane Smith', phone_number: '551837654321', notes: 'Another note.' },
    { id: 3, name: 'Alice Johnson', phone_number: '5551988554114', notes: 'Some note here.' },
];

describe('ContactList', () => {
    it('renders all contacts when searchTerm is empty', () => {
        render(<ContactList contacts={contacts} searchTerm="" onEdit={jest.fn()} onDelete={jest.fn()} />);

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    it('renders filtered contacts based on searchTerm', () => {
        render(<ContactList contacts={contacts} searchTerm="Jane" onEdit={jest.fn()} onDelete={jest.fn()} />);

        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
        expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
    });

    it('renders filtered contacts based on phone number', () => {
        render(<ContactList contacts={contacts} searchTerm="555" onEdit={jest.fn()} onDelete={jest.fn()} />);

        expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
        expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
        expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
    });

    it('renders filtered contacts based on notes', () => {
        render(<ContactList contacts={contacts} searchTerm="Another" onEdit={jest.fn()} onDelete={jest.fn()} />);

        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
        expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
    });

    it('calls onEdit when a contact card is clicked', () => {
        const onEdit = jest.fn();
        render(<ContactList contacts={contacts} searchTerm="" onEdit={onEdit} onDelete={jest.fn()} />);

        fireEvent.click(screen.getByText('John Doe'));
        expect(onEdit).toHaveBeenCalledWith(contacts[0]);
    });

    it('calls onDelete when delete button is clicked on a contact card', () => {
        const onDelete = jest.fn();
        render(<ContactList contacts={contacts} searchTerm="" onEdit={jest.fn()} onDelete={onDelete} />);

        fireEvent.click(screen.getAllByText('Deletar')[0]);
        expect(onDelete).toHaveBeenCalledWith(contacts[0].id);
    });
});
