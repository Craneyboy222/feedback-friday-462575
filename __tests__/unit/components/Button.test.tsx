import { render } from '@testing-library/react';
import Button from '../../components/Button';
describe('Button Component Unit Tests', () => {
  test('renders button with text', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeInTheDocument();
  });
});