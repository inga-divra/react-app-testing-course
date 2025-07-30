import { render, screen } from '@testing-library/react';
import Sandbox from './Sandbox';
import { logRoles } from '@testing-library/react';

describe('03-search-by-role', () => {
  test('renders nav and navigation links', () => {
    const { container } = render(<Sandbox />);
    logRoles(container);
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });
});
