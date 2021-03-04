import { render, screen } from '@testing-library/react';
import Toggler from './Toggler';

test('renders the main title', () => {
  render(<Toggler />);
  const mode = screen.getByTestId('toggler').classList.contains('dark');
  expect(mode).toBe(true);
});
