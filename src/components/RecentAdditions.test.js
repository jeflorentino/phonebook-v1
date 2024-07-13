import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecentAdditions from './RecentAdditions';

const contacts = [
    { id: 1, name: 'John Doe', created_at: '2023-07-10T12:00:00Z' },
    { id: 2, name: 'Jane Smith', created_at: '2023-07-11T12:00:00Z' },
    { id: 3, name: 'Alice Johnson', created_at: '2023-07-12T12:00:00Z' },
    { id: 4, name: 'Bob Brown', created_at: '2023-07-13T12:00:00Z' },
    { id: 5, name: 'Charlie Black', created_at: '2023-07-14T12:00:00Z' },
    { id: 6, name: 'Diana White', created_at: '2023-07-15T12:00:00Z' },
    { id: 7, name: 'Hana Black', created_at: '2023-07-16T12:00:00Z' },
];

describe('RecentAdditions', () => {
    it('renders the most recent 6 contacts', () => {
        render(<RecentAdditions contacts={contacts} onEdit={jest.fn()} />);

        expect(screen.getByText('H')).toBeInTheDocument();
        expect(screen.getByText('D')).toBeInTheDocument();
        expect(screen.getByText('C')).toBeInTheDocument();
        expect(screen.getByText('B')).toBeInTheDocument();
        expect(screen.getByText('A')).toBeInTheDocument();
        expect(screen.getByText('J')).toBeInTheDocument();

        expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    });

    it('displays a message when there are no contacts', () => {
        render(<RecentAdditions contacts={[]} onEdit={jest.fn()} />);
        expect(screen.getByText('Ainda não tem contatos salvos na sua lista')).toBeInTheDocument();
    });

    it('calls onEdit when a contact circle is clicked', () => {
        const onEdit = jest.fn();
        render(<RecentAdditions contacts={contacts} onEdit={onEdit} />);

        fireEvent.click(screen.getByText('C'));
        expect(onEdit).toHaveBeenCalledWith(contacts[2]);
    });

    it('renders contacts sorted by creation date', () => {
        render(<RecentAdditions contacts={contacts} onEdit={jest.fn()} />);

        const contactInitials = ['H','D','C', 'B', 'A', 'J'];

        contactInitials.forEach((initial, index) => {
            const circleElement = screen.getByText(initial);
            expect(circleElement).toBeInTheDocument();
        });

        const contactCircles = screen.getAllByText(/^[A-Z]$/);
        expect(contactCircles).toHaveLength(6);

        expect(contactCircles[0]).toHaveTextContent('H');
        expect(contactCircles[1]).toHaveTextContent('D');
        expect(contactCircles[2]).toHaveTextContent('C');
        expect(contactCircles[3]).toHaveTextContent('B');
        expect(contactCircles[4]).toHaveTextContent('A');
        expect(contactCircles[5]).toHaveTextContent('J');
    });

    it('renders the contact name below the circle', () => {
        render(<RecentAdditions contacts={contacts} onEdit={jest.fn()} />);

        contacts.slice(0, 6).forEach(contact => {
            const nameElement = screen.getByText(contact.name);
            expect(nameElement).toBeInTheDocument();
        });
    });
});
