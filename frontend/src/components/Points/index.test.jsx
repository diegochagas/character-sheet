import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Points from '.';

describe('Points', () => {
  it('disables the points input unless it is the experience field', () => {
    render(
      <Points name="lifePoints" points={5} lostPoints={0} setLostPoints={() => {}}>
        Pontos de vida
      </Points>
    );

    expect(screen.getByLabelText('Pontos de vida')).toBeDisabled();
  });

  it('leaves the experience field enabled and hides the lost-points input', () => {
    render(
      <Points name="experience" points={5} setPoints={() => {}}>
        Pontos de experiência
      </Points>
    );

    expect(screen.getByLabelText('Pontos de experiência')).toBeEnabled();
  });

  it('calls setLostPoints with a number when the lost-points input changes', () => {
    const setLostPoints = vi.fn();

    render(
      <Points
        name="lifePoints"
        points={5}
        lostPoints={0}
        setLostPoints={setLostPoints}
      >
        Pontos de vida
      </Points>
    );

    const [, lostPointsInput] = screen.getAllByRole('spinbutton');

    fireEvent.change(lostPointsInput, { target: { value: '-2' } });

    expect(setLostPoints).toHaveBeenCalledWith(-2);
  });

  it('warns when the remaining points drop to zero or below', () => {
    render(
      <Points
        name="lifePoints"
        points={2}
        lostPoints={-2}
        setLostPoints={() => {}}
      >
        Pontos de vida
      </Points>
    );

    expect(screen.getByText('0 Pontos de vida ou menos.')).toBeInTheDocument();
  });
});
