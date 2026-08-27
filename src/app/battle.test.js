import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  rollDice,
  chooseAttackType,
  chooseDefenseType,
  tryToDodge,
  resolveInitiative,
  resolveTurn,
} from './battle';

function mockRandomSequence(...values) {
  const spy = vi.spyOn(Math, 'random');

  values.forEach(value => spy.mockImplementationOnce(() => value));

  return spy;
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('rollDice', () => {
  it('returns 1 for the lowest possible roll', () => {
    mockRandomSequence(0);

    expect(rollDice()).toBe(1);
  });

  it('returns 6 for the highest possible roll', () => {
    mockRandomSequence(0.9999999);

    expect(rollDice()).toBe(6);
  });
});

describe('chooseAttackType', () => {
  it('returns strength on the low half of the roll', () => {
    mockRandomSequence(0);

    expect(chooseAttackType()).toBe('strength');
  });

  it('returns firePower on the high half of the roll', () => {
    mockRandomSequence(0.5);

    expect(chooseAttackType()).toBe('firePower');
  });
});

describe('chooseDefenseType', () => {
  it('always returns armor when the attacker is at least as skilled', () => {
    const spy = vi.spyOn(Math, 'random');

    expect(
      chooseDefenseType({ skills: 3 }, { skills: 2 })
    ).toBe('armor');
    expect(
      chooseDefenseType({ skills: 2 }, { skills: 2 })
    ).toBe('armor');
    expect(spy).not.toHaveBeenCalled();
  });

  it('rolls between dodge and armor when the defender is more skilled', () => {
    mockRandomSequence(0.2);
    expect(chooseDefenseType({ skills: 1 }, { skills: 3 })).toBe('dodge');

    mockRandomSequence(0.6);
    expect(chooseDefenseType({ skills: 1 }, { skills: 3 })).toBe('armor');
  });
});

describe('tryToDodge', () => {
  it('succeeds when the skill gap beats the dice roll', () => {
    mockRandomSequence(0); // rollDice() -> 1

    expect(
      tryToDodge({ skills: 1 }, { skills: 3 })
    ).toBe(true);
  });

  it('fails when the dice roll beats the skill gap', () => {
    mockRandomSequence(0.9999999); // rollDice() -> 6

    expect(
      tryToDodge({ skills: 1 }, { skills: 3 })
    ).toBe(false);
  });
});

describe('resolveInitiative', () => {
  it('picks the fighter with the higher skills + dice total', () => {
    const player1 = { name: 'Goku', skills: 5 };
    const player2 = { name: 'Vegeta', skills: 5 };

    mockRandomSequence(0, 0.9999999); // player1 rolls 1, player2 rolls 6

    const result = resolveInitiative(player1, player2);

    expect(result).toEqual({
      firstAttackerIndex: 1,
      message: 'Vegeta attacks first!',
    });
  });

  it('breaks ties randomly', () => {
    const player1 = { name: 'Goku', skills: 5 };
    const player2 = { name: 'Vegeta', skills: 5 };

    // both roll 3 (tie), then the tie-break round() call
    mockRandomSequence(0.4, 0.4, 0);

    expect(resolveInitiative(player1, player2)).toEqual({
      firstAttackerIndex: 0,
      message: 'Goku attacks first!',
    });
  });
});

describe('resolveTurn', () => {
  it('uses the defender\'s own armor to compute the Defense Force, not the attacker\'s', () => {
    // attacker.skills (2) >= defender.skills (2), so chooseDefenseType
    // short-circuits to 'armor' without consuming a random() call.
    const attacker = {
      name: 'Attacker',
      skills: 2,
      strength: 3,
      firePower: 1,
      armor: 9, // deliberately large: the old bug used *this* value
    };
    const defender = {
      name: 'Defender',
      skills: 2,
      armor: 1,
      hitPoints: 20,
    };

    mockRandomSequence(
      0, // chooseAttackType -> strength
      0.55, // attack dice -> 4
      0.4 // defence dice -> 3
    );

    const result = resolveTurn(attacker, defender);

    // attackForce = skills(2) + dice(4) + strength(3) = 9
    // defenceForce = dice(3) + defender.armor(1) + defender.skills(2) = 6
    // damage = 9 - 6 = 3
    expect(result.damage).toBe(3);
    expect(result.defenderHitPoints).toBe(17);
    expect(result.dodged).toBe(false);
    expect(result.messages).toEqual([
      'Attacker attacks Defender using his strength.',
      'Defender receives 3 of damage.',
    ]);
  });

  it('doubles the attacker\'s stat and the defender\'s armor on a critical roll (6)', () => {
    const attacker = {
      name: 'Attacker',
      skills: 0,
      strength: 5,
      firePower: 0,
      armor: 0,
    };
    const defender = {
      name: 'Defender',
      skills: 0,
      armor: 2,
      hitPoints: 20,
    };

    mockRandomSequence(
      0, // chooseAttackType -> strength
      0.9999999, // attack dice -> 6 (critical)
      0.9999999 // defence dice -> 6 (critical)
    );

    const result = resolveTurn(attacker, defender);

    // attackForce = 0 + 6 + (5 * 2) = 16
    // defenceForce = 6 + (2 * 2) + skills(0) = 10
    expect(result.damage).toBe(6);
    expect(result.messages).toContain('Critical attack!');
    expect(result.messages).toContain('Critical defence!');
  });

  it('ends the exchange with no damage when the defender dodges', () => {
    const attacker = { name: 'Attacker', skills: 1, strength: 1, firePower: 1 };
    const defender = {
      name: 'Defender',
      skills: 4,
      armor: 0,
      hitPoints: 20,
    };

    mockRandomSequence(
      0, // chooseAttackType -> strength
      0, // attack dice -> 1
      0.2, // chooseDefenseType round(0.2) === 0 -> dodge
      0 // tryToDodge dice -> 1 (defender.skills(4) - attacker.skills(1) = 3 >= 1)
    );

    const result = resolveTurn(attacker, defender);

    expect(result.dodged).toBe(true);
    expect(result.defenderHitPoints).toBe(20);
    expect(result.messages).toContain('Defender dodges!');
  });
});
