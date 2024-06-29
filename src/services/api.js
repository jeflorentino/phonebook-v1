const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const addContact = async (contact) => {
    const response = await fetch(`${API_URL}/phonecontacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    return response.json();
  };

  export const getContacts = async () => {
    try {
      const response = await fetch(`${API_URL}/phonecontacts`);
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      return response.json();
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
      throw error;
    }
  };