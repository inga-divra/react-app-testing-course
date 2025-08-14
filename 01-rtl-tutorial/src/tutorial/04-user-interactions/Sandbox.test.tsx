import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import Sandbox from './Sandbox';

describe('04-user-interactions', () => {
  test('Screen Debug', () => {
    screen.debug();
    const { container } = render(<Sandbox />);
    logRoles(container);
  });
  test('should increment and decrement count using fireEvent', () => {
    render(<Sandbox />);
    const increaseButton = screen.getByRole('button', { name: /increase/i });
    const decreaseButton = screen.getByRole('button', { name: /decrease/i });
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();

    fireEvent.click(increaseButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    fireEvent.click(decreaseButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
  test('should increment and decrement count using userEvent', async () => {
    render(<Sandbox />);
    const user = userEvent.setup();
    const increaseButton = screen.getByRole('button', { name: /increase/i });
    const decreaseButton = screen.getByRole('button', { name: /decrease/i });
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
    await user.click(increaseButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    await user.click(decreaseButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
});
