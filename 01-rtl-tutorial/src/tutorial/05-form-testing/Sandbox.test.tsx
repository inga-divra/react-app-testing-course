import { render, screen, logRoles } from '@testing-library/react';
import Sandbox from '../../tutorial/05-form-testing/Sandbox';
import userEvent, { UserEvent } from '@testing-library/user-event';

//helper function
const getFormElements = () => {
  const elements = {
    emailInputElement: screen.getByRole('textbox', { name: /email/i }),
    passwordInputElement: screen.getByLabelText('Password'),
    confirmPasswordInputElement: screen.getByLabelText(/confirm password/i),
    submitButton: screen.getByRole('button', { name: /submit/i }),
  };
  return elements;
};

describe('05-form-testing', () => {
  // Declare user variable at describe block level so it's accessible in all tests
  let user: UserEvent;

  // beforeEach runs before each test case
  // Used to set up the testing environment in a consistent state
  // This ensures each test starts with fresh DOM and user event instance
  beforeEach(() => {
    user = userEvent.setup();
    render(<Sandbox />);
  });

  test('inputs should be initially empty', () => {
    const {
      emailInputElement,
      passwordInputElement,
      confirmPasswordInputElement,
    } = getFormElements();

    expect(emailInputElement).toHaveValue('');
    expect(passwordInputElement).toHaveValue('');
    expect(confirmPasswordInputElement).toHaveValue('');
  });

  test('should be able to type in the input', async () => {
    const {
      emailInputElement,
      passwordInputElement,
      confirmPasswordInputElement,
    } = getFormElements();

    await user.type(emailInputElement, 'test@test.com');
    expect(emailInputElement).toHaveValue('test@test.com');

    await user.type(passwordInputElement, 'secret');
    expect(passwordInputElement).toHaveValue('secret');

    await user.type(confirmPasswordInputElement, 'secret');
    expect(confirmPasswordInputElement).toHaveValue('secret');
  });

  test('should show email error if email is invalid', async () => {
    const { emailInputElement, submitButton } = getFormElements();

    expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();

    await user.type(emailInputElement, 'invalid');
    await user.click(submitButton);

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });
});
