import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../../src/components/shared/Layout';

test('renders Layout with children', () => {
  render(<Layout><div>Layout Content</div></Layout>);
  const layoutElement = screen.getByText(/Layout Content/i);
  expect(layoutElement).toBeInTheDocument();
});
