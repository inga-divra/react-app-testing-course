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
});
