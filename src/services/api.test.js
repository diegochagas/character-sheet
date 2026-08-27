import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
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

vi.mock('axios');

describe('getCharacters', () => {
  it('fetches the characters collection', () => {
    axios.get.mockResolvedValue({ data: [] });

    getCharacters();

    expect(axios.get).toHaveBeenCalledWith(`${url}/characters`);
  });
});

describe('postCharacter', () => {
  it('posts a character to the collection', () => {
    const character = { name: 'Goku' };

    axios.post.mockResolvedValue({ data: character });

    postCharacter(character);

    expect(axios.post).toHaveBeenCalledWith(`${url}/characters`, character);
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
