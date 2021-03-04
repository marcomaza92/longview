import { render, screen } from '@testing-library/react';
import Toggler from './Toggler';

test('renders the main title', () => {
  render(<Toggler />);
  const title = screen.getByText(/Toggler/i);
  expect(title).toBeInTheDocument();
});
