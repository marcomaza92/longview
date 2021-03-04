import { render, screen } from '@testing-library/react';
import Controls from './Controls';

test('renders the main title', () => {
  render(<Controls />);
  const title = screen.getByText(/Controls/i);
  expect(title).toBeInTheDocument();
});
