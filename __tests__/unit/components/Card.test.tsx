import { render } from '@testing-library/react';
import Card from '../../components/Card';
describe('Card Component Unit Tests', () => {
  test('renders card with title', () => {
    const { getByText } = render(<Card title='Card Title' />);
    expect(getByText('Card Title')).toBeInTheDocument();
  });
});