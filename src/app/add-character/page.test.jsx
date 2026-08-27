import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddCharacter from './page';
import { postCharacter } from '../../services/api';

vi.mock('../../services/api', async () => {
  const actual = await vi.importActual('../../services/api');

  return { ...actual, postCharacter: vi.fn() };
});

describe('AddCharacter', () => {
  beforeEach(() => {
    postCharacter.mockReset();
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  it('submits the form with the entered name and no manual id', async () => {
    postCharacter.mockResolvedValue({ data: {} });
    const user = userEvent.setup();

    render(<AddCharacter />);

    await user.type(screen.getByLabelText('Nome'), 'Vegeta');
    await user.click(screen.getByRole('button', { name: 'Create' }));

    expect(postCharacter).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Vegeta' })
    );

    const [payload] = postCharacter.mock.calls[0];

    expect(payload).not.toHaveProperty('id');
  });

  it('shows an alert instead of crashing when saving fails', async () => {
    postCharacter.mockRejectedValue(new Error('network error'));
    const user = userEvent.setup();

    render(<AddCharacter />);

    await user.type(screen.getByLabelText('Nome'), 'Vegeta');
    await user.click(screen.getByRole('button', { name: 'Create' }));

    expect(window.alert).toHaveBeenCalledWith(
      'Failed to save character Vegeta.'
    );
  });
});
