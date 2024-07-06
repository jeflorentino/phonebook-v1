import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders Home', async () => {
  await act(async () => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Yellowzim/i);
  expect(linkElement).toBeInTheDocument();
});
