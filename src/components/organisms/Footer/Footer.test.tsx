import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the main title', () => {
  render(<Footer />);
  const title = screen.getByText(/Footer/i);
  expect(title).toBeInTheDocument();
});
