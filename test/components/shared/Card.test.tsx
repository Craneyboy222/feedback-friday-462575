import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../src/components/shared/Card';

test('renders Card with children', () => {
  render(<Card>Card Content</Card>);
  const cardElement = screen.getByText(/Card Content/i);
  expect(cardElement).toBeInTheDocument();
});
