// BookingForm.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm with expected text', () => {
  render(<BookingForm onReservation={() => {}} />);

  // Verifica si el texto esperado está presente
  expect(screen.getByLabelText('Date:')).toBeInTheDocument();
  expect(screen.getByLabelText('Time:')).toBeInTheDocument();
  expect(screen.getByLabelText('Number of Guests:')).toBeInTheDocument();
  expect(screen.getByLabelText('Occasion:')).toBeInTheDocument();
  expect(screen.getByText('Make Reservation')).toBeInTheDocument();
});
