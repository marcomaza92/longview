import { render, screen } from '@testing-library/react';
import Display from './Display';

test('renders the main title', () => {
  render(<Display />);
  const element = screen.getByTestId('placeholder');
  expect(element).toBeInTheDocument();
});
