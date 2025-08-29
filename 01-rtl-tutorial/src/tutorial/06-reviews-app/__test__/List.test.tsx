import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import List from '../List';
import { Review } from '../Sandbox';

const mockReviews: Review[] = [
  {
    email: 'test@example.com',
    rating: '4',
    text: 'Great product!',
  },
  {
    email: 'user@example.com',
    rating: '5',
    text: 'Excellent service',
  },
];

describe('List Component', () => {
  test('renders heading', () => {
    render(<List reviews={[]} />);
    expect(
      screen.getByRole('heading', { level: 2, name: /reviews/i })
    ).toBeInTheDocument();
  });

  test('displays "No reviews yet" when reviews array is empty', () => {
    render(<List reviews={[]} />);
    expect(screen.getByText('No reviews yet')).toBeInTheDocument();
  });
});
