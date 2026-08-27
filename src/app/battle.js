export function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

export function chooseAttackType() {
  const type = Math.floor(Math.random() * 2) + 1;

  return type === 1 ? 'strength' : 'firePower';
}

export function chooseDefenseType(playerAttack, playerDefend) {
  if (playerAttack.skills >= playerDefend.skills) return 'armor';

  return Math.round(Math.random()) === 0 ? 'dodge' : 'armor';
}

export function tryToDodge(playerAttack, playerDefend) {
  const diceResult = rollDice();

  return playerDefend.skills - playerAttack.skills >= diceResult;
}

export function resolveInitiative(player1, player2) {
  const player1Initiative = player1.skills + rollDice();
  const player2Initiative = player2.skills + rollDice();

  if (player1Initiative > player2Initiative) {
    return { firstAttackerIndex: 0, message: `${player1.name} attacks first!` };
  }

  if (player2Initiative > player1Initiative) {
    return { firstAttackerIndex: 1, message: `${player2.name} attacks first!` };
  }

  return Math.round(Math.random()) === 0
    ? { firstAttackerIndex: 0, message: `${player1.name} attacks first!` }
    : { firstAttackerIndex: 1, message: `${player2.name} attacks first!` };
}

// Resolves one attacker -> defender exchange. Pure and deterministic given
// Math.random, so the combat math can be unit tested without the UI.
export function resolveTurn(playerAttack, playerDefend) {
  const messages = [];
  const attackType = chooseAttackType();

  messages.push(
    `${playerAttack.name} attacks ${playerDefend.name} using his ${attackType}.`
  );

  const attackDiceResult = rollDice();
  const isAttackCritical = attackDiceResult === 6;

  if (isAttackCritical) messages.push('Critical attack!');

  const attackForce =
    playerAttack.skills +
    attackDiceResult +
    (isAttackCritical
      ? playerAttack[attackType] * 2
      : playerAttack[attackType]);

  const defenseType = chooseDefenseType(playerAttack, playerDefend);

  const dodged =
    defenseType === 'dodge' && tryToDodge(playerAttack, playerDefend);

  if (dodged) {
    messages.push(`${playerDefend.name} dodges!`);

    return { messages, defenderHitPoints: playerDefend.hitPoints, dodged };
  }

  const defenceDiceResult = rollDice();
  const isDefenceCritical = defenceDiceResult === 6;

  if (isDefenceCritical) messages.push('Critical defence!');

  // The defender's own Armor is what counts towards their Defense Force,
  // whether or not the roll was a critical.
  let defenceForce =
    defenceDiceResult +
    (isDefenceCritical ? playerDefend.armor * 2 : playerDefend.armor);

  if (defenseType === 'armor') {
    defenceForce += playerDefend.skills;
  }

  const damage = attackForce - defenceForce;

  if (damage > 0) {
    messages.push(`${playerDefend.name} receives ${damage} of damage.`);

    return {
      messages,
      defenderHitPoints: playerDefend.hitPoints - damage,
      dodged,
      damage,
    };
  }

  messages.push(`${playerDefend.name} defends attack.`);

  return {
    messages,
    defenderHitPoints: playerDefend.hitPoints,
    dodged,
    damage: 0,
  };
}
