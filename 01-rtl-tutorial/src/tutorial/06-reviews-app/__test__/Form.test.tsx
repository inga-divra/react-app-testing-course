import { render, screen } from '@testing-library/react';
import Form from '../Form';
import userEvent from '@testing-library/user-event';

export const getFormElements = () => {
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const ratingSelect = screen.getByRole('combobox', { name: /rating/i });
  const textArea = screen.getByRole('textbox', { name: /your review/i });
  const submitButton = screen.getByRole('button', { name: /submit review/i });

  return {
    emailInput,
    ratingSelect,
    textArea,
    submitButton,
  };
};

describe('Review Form', () => {
  test('renders form elements correctly', () => {
    const mockOnSubmit = vi.fn();

    beforeEach(() => {
      mockOnSubmit.mockClear();
    });
    render(<Form onSubmit={mockOnSubmit} />);
    const { emailInput, ratingSelect, textArea, submitButton } =
      getFormElements();
    expect(emailInput).toHaveValue('');
    expect(ratingSelect).toHaveValue('');
    expect(textArea).toHaveValue('');
    expect(submitButton).toBeInTheDocument();
  });

  test('shows error message when review is too short', async () => {
    const mockOnSubmit = vi.fn();
    const user = userEvent.setup();
    render(<Form onSubmit={mockOnSubmit} />);

    // since inputs have html required attribute, all of them need to be filled, in order test short review error

    const { emailInput, ratingSelect, textArea, submitButton } =
      getFormElements();

    await user.type(emailInput, 'test@example.com');
    await user.selectOptions(ratingSelect, '5');
    await user.type(textArea, 'Short');
    await user.click(submitButton);

    expect(
      screen.getByText(/review must be at least 10 characters long/i)
    ).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
