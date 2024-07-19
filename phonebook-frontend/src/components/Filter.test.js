import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from './Filter';

describe('Filter Component', () => {
    const mockOnSearchChange = jest.fn();

    beforeEach(() => {
        mockOnSearchChange.mockClear();
    });

    test('renders Filter input', () => {
        render(
            <Filter
                searchTerm=""
                onSearchChange={mockOnSearchChange}
            />
        );

        expect(screen.getByPlaceholderText('Pesquise aqui')).toBeInTheDocument();
    });

    test('calls onSearchChange when input value changes', () => {
        render(
            <Filter
                searchTerm=""
                onSearchChange={mockOnSearchChange}
            />
        );

        fireEvent.change(screen.getByPlaceholderText('Pesquise aqui'), {
            target: { value: 'test' },
        });

        expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
    });

    test('renders with the correct initial value', () => {
        render(
            <Filter
                searchTerm="initial value"
                onSearchChange={mockOnSearchChange}
            />
        );

        expect(screen.getByPlaceholderText('Pesquise aqui')).toHaveValue('initial value');
    });
});
