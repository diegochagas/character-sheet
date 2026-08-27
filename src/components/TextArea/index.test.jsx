import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from '.';

describe('TextArea', () => {
  it('removes a chosen item and returns it to items, without mutating the original choosen array', async () => {
    const user = userEvent.setup();
    const choosen = ['Corte', 'Fogo'];
    const items = ['Frio'];
    const setChoosen = vi.fn();
    const setItems = vi.fn();
    const removeAdvantage = vi.fn();

    const { container } = render(
      <TextArea
        items={items}
        setItems={setItems}
        choosen={choosen}
        setChoosen={setChoosen}
        removeAdvantage={removeAdvantage}
      />
    );

    expect(screen.getByText('Corte')).toBeInTheDocument();

    const [removeCorte] = container.querySelectorAll('.fa-minus');

    await user.click(removeCorte);

    // the array the component was handed must be left untouched
    expect(choosen).toEqual(['Corte', 'Fogo']);
    expect(setChoosen).toHaveBeenCalledWith(['Fogo']);
    expect(setItems).toHaveBeenCalledWith(['Corte', 'Frio']);
    expect(removeAdvantage).toHaveBeenCalledWith('Corte');
  });

  it('shows a required-field warning once touched and left empty', async () => {
    const user = userEvent.setup();

    render(<TextArea />);

    const textarea = screen.getByRole('textbox');

    await user.click(textarea);
    await user.tab();

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });

  it('does not warn while there is still a chosen item', async () => {
    const user = userEvent.setup();

    render(<TextArea choosen={['Corte']} />);

    const textarea = screen.getByRole('textbox');

    await user.click(textarea);
    await user.tab();

    expect(screen.queryByText('Campo obrigatório')).not.toBeInTheDocument();
  });
});
