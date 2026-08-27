import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '.';

describe('Select', () => {
  it('disables the add button until an option is chosen', async () => {
    const user = userEvent.setup();

    render(
      <Select
        defaultOption="-- choose --"
        items={['Corte', 'Fogo']}
        setItems={() => {}}
        choosen={[]}
        setChoosen={() => {}}
        addAdvantage={() => {}}
      />
    );

    expect(screen.getByRole('button')).toBeDisabled();

    await user.selectOptions(screen.getByRole('combobox'), 'Fogo');

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('moves the chosen option into choosen without mutating the original items array', async () => {
    const user = userEvent.setup();
    const items = ['Corte', 'Fogo'];
    const setItems = vi.fn();
    const setChoosen = vi.fn();
    const addAdvantage = vi.fn();

    render(
      <Select
        defaultOption="-- choose --"
        items={items}
        setItems={setItems}
        choosen={[]}
        setChoosen={setChoosen}
        addAdvantage={addAdvantage}
      />
    );

    await user.selectOptions(screen.getByRole('combobox'), 'Fogo');
    await user.click(screen.getByRole('button'));

    // the array the component was handed must be left untouched
    expect(items).toEqual(['Corte', 'Fogo']);
    expect(setItems).toHaveBeenCalledWith(['Corte']);
    expect(setChoosen).toHaveBeenCalledWith(['Fogo']);
    expect(addAdvantage).toHaveBeenCalledWith('Fogo');
  });
});
