import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the main title', () => {
  render(<Header />);
  const title = screen.getByText(/Header/i);
  expect(title).toBeInTheDocument();
});
