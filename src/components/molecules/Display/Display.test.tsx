import { render, screen } from '@testing-library/react';
import Display from './Display';

test('renders the main title', () => {
  render(<Display />);
  const title = screen.getByText(/Display/i);
  expect(title).toBeInTheDocument();
});
