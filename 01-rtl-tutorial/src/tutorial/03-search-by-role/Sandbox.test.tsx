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

  test('renders headings with correct hierarchy', () => {
    render(<Sandbox />);
    expect(screen.getByRole('heading', { name: 'Main Heading', level: 1 }));
    expect(screen.getByRole('heading', { name: 'Subheading', level: 2 }));
  });

  test('renders image with alt text', () => {
    render(<Sandbox />);
    expect(screen.getByRole('img', { name: 'Example' })).toBeInTheDocument();
  });

  test('renders initial buttons', () => {
    render(<Sandbox />);
    expect(
      screen.getByRole('button', { name: 'Click me' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });
});
