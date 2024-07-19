import fetchMock from 'jest-fetch-mock';
import { addContact, getContacts, updateContact, deleteContact } from './api';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

describe('API tests', () => {
    afterEach(() => {
        fetchMock.resetMocks();
    });

    test('addContact should post a new contact and return the response', async () => {
        const contact = { name: 'John Doe', phone: '12345678922' };
        fetchMock.mockResponseOnce(JSON.stringify(contact), { headers: { 'Content-Type': 'application/json' } });

        const response = await addContact(contact);
        expect(response).toEqual(contact);
    });

    test('getContacts should fetch contacts and return the response', async () => {
        const contacts = [{ id: 1, name: 'John Doe', phone: '5514988775566' }];
        fetchMock.mockResponseOnce(JSON.stringify(contacts), { headers: { 'Content-Type': 'application/json' } });

        const response = await getContacts();
        expect(response).toEqual(contacts);
    });

    test('updateContact should update a contact and return the response', async () => {
        const contact = { name: 'John Doe', phone: '5514988775577' };
        fetchMock.mockResponseOnce(JSON.stringify(contact), { headers: { 'Content-Type': 'application/json' } });

        const response = await updateContact(1, contact);
        expect(response).toEqual(contact);
    });

    test('deleteContact should delete a contact', async () => {
        fetchMock.mockResponseOnce('', { status: 200 });

        await deleteContact(1);
        expect(fetchMock.mock.calls.length).toEqual(1);
        expect(fetchMock.mock.calls[0][0]).toEqual(`${API_URL}/phonecontacts/1`);
    });

    test('getContacts should throw an error when fetch fails', async () => {
        fetchMock.mockRejectOnce(new Error('Failed to fetch contacts'));

        await expect(getContacts()).rejects.toThrow('Failed to fetch contacts');
    });

    test('updateContact should throw an error when update fails', async () => {
        const contact = { name: 'John Doe', phone: '987654321' };
        fetchMock.mockRejectOnce(new Error('Failed to update contact'));

        await expect(updateContact(1, contact)).rejects.toThrow('Failed to update contact');
    });

    test('deleteContact should throw an error when delete fails', async () => {
        fetchMock.mockRejectOnce(new Error('Failed to delete contact'));

        await expect(deleteContact(1)).rejects.toThrow('Failed to delete contact');
    });
});
