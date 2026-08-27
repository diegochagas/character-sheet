import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectPlayer from '.';

const characters = [
  {
    id: 1,
    name: "O'Brien",
    strength: 2,
    skills: 1,
    constitution: 3,
    armor: 0,
    firePower: 1,
  },
  {
    id: 2,
    name: 'Goku',
    strength: 4,
    skills: 5,
    constitution: 4,
    armor: 4,
    firePower: 5,
  },
];

describe('SelectPlayer', () => {
  it('parses a character whose name contains an apostrophe', async () => {
    const user = userEvent.setup();
    const setCharacter = vi.fn();

    render(
      <SelectPlayer
        characters={characters}
        character={{}}
        setCharacter={setCharacter}
        setIsButtonDisabled={() => {}}
        otherPlayer={{}}
      />
    );

    await user.selectOptions(screen.getByRole('combobox'), "O'Brien");

    expect(setCharacter).toHaveBeenCalledWith(characters[0]);
  });

  it('resets the selection and disables the fight button when cleared', async () => {
    const user = userEvent.setup();
    const setCharacter = vi.fn();
    const setIsButtonDisabled = vi.fn();

    render(
      <SelectPlayer
        characters={characters}
        character={characters[1]}
        setCharacter={setCharacter}
        setIsButtonDisabled={setIsButtonDisabled}
        otherPlayer={{}}
      />
    );

    await user.selectOptions(screen.getByRole('combobox'), '');

    expect(setCharacter).toHaveBeenCalledWith({});
    expect(setIsButtonDisabled).toHaveBeenCalledWith(true);
  });

  it('enables the fight button once both players are chosen', async () => {
    const user = userEvent.setup();
    const setIsButtonDisabled = vi.fn();

    render(
      <SelectPlayer
        characters={characters}
        character={{}}
        setCharacter={() => {}}
        setIsButtonDisabled={setIsButtonDisabled}
        otherPlayer={characters[1]}
      />
    );

    await user.selectOptions(screen.getByRole('combobox'), 'Goku');

    expect(setIsButtonDisabled).toHaveBeenCalledWith(false);
  });

  it('displays the selected character stats, including derived hit points', () => {
    render(
      <SelectPlayer
        characters={characters}
        character={characters[1]}
        setCharacter={() => {}}
        setIsButtonDisabled={() => {}}
        otherPlayer={{}}
      />
    );

    expect(screen.getByText('Goku', { selector: '#name' })).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument(); // constitution 4 * 5
  });
});
