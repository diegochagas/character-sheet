import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Attribute from '.';

describe('Attribute', () => {
  it('renders the label and current value', () => {
    render(<Attribute name="strength" label="Força" value={3} />);

    expect(screen.getByLabelText('Força')).toHaveValue(3);
  });

  it('calls setAttribute with a number when the input changes', async () => {
    const setAttribute = vi.fn();
    const user = userEvent.setup();

    render(
      <Attribute
        name="strength"
        label="Força"
        value={0}
        setAttribute={setAttribute}
      />
    );

    await user.clear(screen.getByLabelText('Força'));
    await user.type(screen.getByLabelText('Força'), '7');

    expect(setAttribute).toHaveBeenLastCalledWith(7);
  });

  it('warns when a freshly created character exceeds 5 points', () => {
    render(
      <Attribute name="strength" label="Força" value={6} experience={0} />
    );

    expect(
      screen.getByText('Máximo de 5 para recém-criados')
    ).toBeInTheDocument();
  });

  it('does not warn once the character has experience', () => {
    render(
      <Attribute name="strength" label="Força" value={6} experience={10} />
    );

    expect(
      screen.queryByText('Máximo de 5 para recém-criados')
    ).not.toBeInTheDocument();
  });
});
