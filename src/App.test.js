import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders game title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Basic Clicker/i);
  expect(titleElement).toBeInTheDocument();
});
