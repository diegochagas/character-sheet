import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Characteristics from '.';

function noop() {}

describe('Characteristics', () => {
  it('derives life and magic points from constitution', async () => {
    const user = userEvent.setup();

    render(
      <Characteristics
        strength={0}
        setStrength={noop}
        skills={0}
        setSkills={noop}
        constitution={0}
        setConstitution={noop}
        armor={0}
        setArmor={noop}
        firePower={0}
        setFirePower={noop}
        experience={0}
        setExperience={noop}
      />
    );

    const lifePoints = screen.getByLabelText(/Pontos de.*ida/);

    expect(lifePoints).toHaveValue(1);

    await user.clear(screen.getByLabelText('Resistência'));
    await user.type(screen.getByLabelText('Resistência'), '3');

    expect(lifePoints).toHaveValue(15);
  });
});
