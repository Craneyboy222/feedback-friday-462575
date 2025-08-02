import { render } from '@testing-library/react';
import Layout from '../../components/Layout';
describe('Layout Component Unit Tests', () => {
  test('renders layout with children', () => {
    const { getByText } = render(<Layout><div>Content</div></Layout>);
    expect(getByText('Content')).toBeInTheDocument();
  });
});