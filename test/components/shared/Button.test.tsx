import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/shared/Button';

test('renders Button and checks click event', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
