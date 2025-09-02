import { render, screen } from '@testing-library/react';
import Form from '../Form';

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
});
