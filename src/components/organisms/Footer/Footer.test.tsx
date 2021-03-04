import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the main title', () => {
  render(<Footer />);
  const element = screen.getByTestId('footer');
  expect(element).toBeInTheDocument();
});
