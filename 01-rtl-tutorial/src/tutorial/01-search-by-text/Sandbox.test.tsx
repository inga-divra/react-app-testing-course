import { render, screen } from '@testing-library/react';
import Sandbox from './Sandbox';

describe('01-search-by-text', () => {
  test('demonstrates different query methods', async () => {
    render(<Sandbox />);
    screen.debug();

    //1.getByText
    //const heading = screen.getByText('React Testing Library Examples');
    //expect(heading).toBeInTheDocument();
    expect(screen.getByText(/react/i)).toBeInTheDocument();
  });
});
