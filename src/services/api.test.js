import { describe, it, expect, beforeEach } from 'vitest';
import {
  getCharacters,
  postCharacter,
  scales,
  types,
  races,
  classes,
  advantages,
  disadvantages,
} from './api';

beforeEach(() => {
  window.localStorage.clear();
});

describe('getCharacters', () => {
  it('returns the seed characters when nothing is stored yet', () => {
    const characters = getCharacters();

    expect(characters.length).toBeGreaterThan(0);
    expect(characters.some(character => character.name === 'Goku')).toBe(
      true
    );
  });

  it('returns whatever was previously persisted', () => {
    postCharacter({ name: 'Trunks' });

    const characters = getCharacters();

    expect(characters.some(character => character.name === 'Trunks')).toBe(
      true
    );
  });
});

describe('postCharacter', () => {
  it('assigns an id one greater than the current max and persists it', () => {
    const created = postCharacter({ name: 'Trunks' });

    expect(created.id).toBe(7); // seed data's highest id is 6
    expect(getCharacters()).toContainEqual(created);
  });

  it('keeps assigning increasing ids across repeated calls', () => {
    const first = postCharacter({ name: 'A' });
    const second = postCharacter({ name: 'B' });

    expect(second.id).toBe(first.id + 1);
  });
});

describe('static rule data', () => {
  it('every scale has a numeric value and a label', () => {
    scales.forEach(scale => {
      expect(typeof scale.value).toBe('number');
      expect(typeof scale.label).toBe('string');
    });
  });

  it('every damage type references one of the two damage categories', () => {
    types.forEach(type => {
      expect(['Dano Físico', 'Dano por Energia']).toContain(type.damage);
    });
  });

  it('races, classes, advantages and disadvantages all have unique labels', () => {
    [races, classes, advantages, disadvantages].forEach(list => {
      const labels = list.map(item => item.label);

      expect(new Set(labels).size).toBe(labels.length);
    });
  });

  it('disadvantages always carry a non-positive value', () => {
    disadvantages.forEach(disadvantage => {
      expect(disadvantage.value).toBeLessThanOrEqual(0);
    });
  });
});
