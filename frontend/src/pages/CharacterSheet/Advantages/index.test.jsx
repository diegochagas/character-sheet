import React, { useState } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Advantages from '.';

function Harness() {
  const [totalAdvantages, setTotalAdvantages] = useState(0);

  return (
    <>
      <span data-testid="total">{totalAdvantages}</span>
      <Advantages
        totalAdvantages={totalAdvantages}
        setTotalAdvantages={setTotalAdvantages}
      />
    </>
  );
}

describe('Advantages', () => {
  it('charges a flat cost per chosen kit and refunds it on removal (regression)', async () => {
    const user = userEvent.setup();
    const { container } = render(<Harness />);
    const total = () => Number(screen.getByTestId('total').textContent);

    // In the "Vantagens" block the selects are: unique advantages, kits,
    // advantages — "Cavaleiro"/"Mago" only exist in the kits list.
    const kitSelect = screen.getAllByRole('combobox')[1];
    const addKitButton = screen.getAllByRole('button')[1];

    expect(total()).toBe(0);

    await user.selectOptions(kitSelect, 'Cavaleiro');
    await user.click(addKitButton);

    // Previously the first kit added contributed nothing (stale-closure bug).
    expect(total()).toBe(1);

    await user.selectOptions(kitSelect, 'Mago');
    await user.click(addKitButton);

    expect(total()).toBe(2);

    const rows = Array.from(container.querySelectorAll('.adicionados'));
    const cavaleiroRow = rows.find(row => row.textContent.includes('Cavaleiro'));

    await user.click(cavaleiroRow.querySelector('.fa-minus'));

    expect(total()).toBe(1);
  });

  it('applies and reverts an advantage\'s own point value', async () => {
    const user = userEvent.setup();
    const { container } = render(<Harness />);
    const total = () => Number(screen.getByTestId('total').textContent);

    const advantageSelect = screen.getAllByRole('combobox')[2];
    const addAdvantageButton = screen.getAllByRole('button')[2];

    await user.selectOptions(advantageSelect, 'Paladino');
    await user.click(addAdvantageButton);

    expect(total()).toBe(1); // Paladino is worth 1 point

    const rows = Array.from(container.querySelectorAll('.adicionados'));
    const paladinoRow = rows.find(row => row.textContent.includes('Paladino'));

    await user.click(paladinoRow.querySelector('.fa-minus'));

    expect(total()).toBe(0);
  });
});
