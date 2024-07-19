import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactCircle from './ContactCircle';

const contact = {
    id: 1,
    name: 'John Doe',
};

describe('ContactCircle', () => {
    it('renders the contact initial correctly', () => {
        render(<ContactCircle contact={contact} onEdit={jest.fn()} />);

        const circleElement = screen.getByText('J');
        expect(circleElement).toBeInTheDocument();
        expect(circleElement).toHaveClass('rounded-full');
    });

    it('renders the contact name below the circle', () => {
        render(<ContactCircle contact={contact} onEdit={jest.fn()} />);

        const nameElement = screen.getByText(contact.name);
        expect(nameElement).toBeInTheDocument();
        expect(nameElement).toHaveClass('text-sm');
    });

    it('calls onEdit when the circle is clicked', () => {
        const onEdit = jest.fn();
        render(<ContactCircle contact={contact} onEdit={onEdit} />);

        const circleElement = screen.getByText('J');
        fireEvent.click(circleElement);

        expect(onEdit).toHaveBeenCalledWith(contact);
    });

});
