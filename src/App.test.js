import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the correct header', () => {
  const { getByText} = render(<App />);
  const headerElement =  getByText(/User Table/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders a table', () => {
  render(<App />);
  const tableElement =  screen.getByTestId('table');
  expect(tableElement).toBeInTheDocument();
});
