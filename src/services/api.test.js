import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
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
import { url } from '../utils';

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn());
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('getCharacters', () => {
  it('fetches the characters collection and returns the parsed JSON', async () => {
    const characters = [{ id: 1, name: 'Goku' }];

    fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(characters) });

    const result = await getCharacters();

    expect(fetch).toHaveBeenCalledWith(`${url}/characters`, undefined);
    expect(result).toEqual(characters);
  });

  it('throws when the request fails', async () => {
    fetch.mockResolvedValue({ ok: false, status: 500 });

    await expect(getCharacters()).rejects.toThrow('500');
  });
});

describe('postCharacter', () => {
  it('posts a character to the collection as JSON', async () => {
    const character = { name: 'Goku' };

    fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(character) });

    const result = await postCharacter(character);

    expect(fetch).toHaveBeenCalledWith(`${url}/characters`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(character),
    });
    expect(result).toEqual(character);
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
