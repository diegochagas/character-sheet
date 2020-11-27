import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import SelectPlayer from '../../components/SelectPlayer';
import { charactersStorageName } from '../../utils';

import { Container } from './styles';

function Home() {
  const characters = localStorage.getItem(charactersStorageName) !== null ? JSON.parse(localStorage.getItem(charactersStorageName)) : [];
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [resultsDisplay, setResultsDisplay] = useState("none");
  const resultsElement = useRef(null);
  const strength = "strength";
  const firePower = "firePower";
  const dodge = "dodge";
  const armor = "armor";

  function renderMessage(message) {
    resultsElement.current.innerHTML = "<p><b>" + message + "</b></p>" + resultsElement.current.innerHTML;
  }

  function chooseAttackType() {
    const type = Math.floor(Math.random() * 2) + 1;

    if (type === 1) return strength;

    return firePower;
  }

  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  async function rollInitiative(player1, player2) {
    renderMessage("Roll iniative...");

    await delay(1000);

    const player1Iniative = player1.skills + rollDice();

    const player2Iniative = player2.skills + rollDice();

    if (player1Iniative > player2Iniative) {
      renderMessage(`${player1.name} attacks first!`);

      await delay(1000);

      return 0;
    } else if (player2Iniative > player1Iniative) {
      renderMessage(`${player2.name} attacks first!`);

      await delay(1000);

      return 1;
    } else {
      const iniative = Math.round(Math.random());

      if (iniative === 0) {
        renderMessage(`${player1.name} attacks first!`);

        await delay(1000);

        return 0;
      } else {
        renderMessage(`${player2.name} attacks first!`);

        await delay(1000);

        return 1;
      }
    }
  }

  function delay(milliseconds) {
    return new Promise((r) => setTimeout(r, milliseconds));
  }

  function tryToDodge(playerAttack, playerDefend) {
    const diceResult = rollDice();

    return playerDefend.skills - playerAttack.skills >= diceResult;
  }

  function chooseDefenseType(playerAttack, playerDefend) {
    if (playerAttack.skills >= playerDefend.skills) return armor;

    const defenseChoice = Math.round(Math.random());

    return defenseChoice === 0 ? dodge : armor;
  }

  async function turn(playerAttack, playerDefend) {
    const attackType = chooseAttackType();

    renderMessage(`${playerAttack.name} attacks ${playerDefend.name} using his ${attackType}.`);

    let diceResult = rollDice();

    let isCritical = diceResult === 6;

    if (isCritical) {
      renderMessage("Critical attack!");
    }

    const attackForce = playerAttack.skills + diceResult + (isCritical ? playerAttack[attackType] * 2 : playerAttack[attackType]);

    await delay(1000);

    const defenseType = chooseDefenseType(playerAttack, playerDefend);

    let heDodge = false;

    if (defenseType === dodge) {
      heDodge = tryToDodge(playerAttack, playerDefend);
    }

    if (heDodge) {
      renderMessage(`${playerDefend.name} dodges!`);

      return playerDefend.hitPoints;
    }

    diceResult = rollDice();

    isCritical = diceResult === 6;

    if (isCritical) {
      renderMessage("Critical defence!");

      await delay(1000);
    }

    let defenceForce = diceResult + (isCritical ? playerDefend.armor * 2 : playerAttack.armor);

    if (defenseType === armor) {
      defenceForce += playerDefend.skills;
    }

    const damage = attackForce - defenceForce;

    if (damage > 0) {
      renderMessage(`${playerDefend.name} receives ${damage} of damage.`);

      return playerDefend.hitPoints - damage;
    }

    renderMessage(`${playerDefend.name} defends attack.`);

    return playerDefend.hitPoints;
  }

  async function executeBattle(player1, player2) {
    setIsButtonDisabled(true);

    setResultsDisplay("block");

    player1.hitPoints = player1.constitution * 5;
    player2.hitPoints = player2.constitution * 5;

    const iniative = await rollInitiative(player1, player2);

    if (iniative === 0) {
      while (player1.hitPoints > 0 && player2.hitPoints > 0) {
        player2.hitPoints = await turn(player1, player2);

        await delay(1000);

        if (player2.hitPoints > 0) {
          player1.hitPoints = await turn(player2, player1);

          await delay(1000);
        }
      }
    } else {
      while (player1.hitPoints > 0 && player2.hitPoints > 0) {
        player1.hitPoints = await turn(player2, player1);

        await delay(1000);

        if (player1.hitPoints > 0) {
          player2.hitPoints = await turn(player1, player2);

          await delay(1000);
        }
      }
    }

    if (player1.hitPoints <= 0) {
      renderMessage(`${player1.name} is out of combat.`);

      await delay(1000);

      renderMessage(`${player2.name} Wins!`);
    } else if (player2.hitPoints <= 0) {
      renderMessage(`${player2.name} is out of combat.`);

      await delay(1000);

      renderMessage(`${player1.name} Wins!`);
    } else {
      console.error(`Error: check players attributes.
        Player 1: ${JSON.stringify(player1)}
        Player 2: ${JSON.stringify(player2)}.
      `);
    }

    setIsButtonDisabled(false);
  }

  function startFight() {
    resultsElement.current.innerHTML = "";

    executeBattle(player1, player2);
  }

  return (
    <Container className="battle">
      {characters.length > 0 && (
        <>
          <div className="players-container">
            <div className="players">
              <SelectPlayer
                characters={characters}
                character={player1}
                setCharacter={setPlayer1}
                setIsButtonDisabled={setIsButtonDisabled}
                otherPlayer={player2}
              />

              <SelectPlayer
                characters={characters}
                character={player2}
                setCharacter={setPlayer2}
                setIsButtonDisabled={setIsButtonDisabled}
                otherPlayer={player1}
              />
            </div>

            <button
              id="fight"
              className="btn btn-primary"
              disabled={isButtonDisabled}
              onClick={startFight}
            >
              Fight!
            </button>
          </div>

          <div
            id="results"
            className="results"
            style={{ display: resultsDisplay }}
            ref={resultsElement}
          />
        </>
      )}

      {characters.length === 0 && (
        <div className="empty-characters">
          <p>You need to add new characters:</p>

          <Link to="/add-character">Click here to add a new character here!</Link>
        </div>
      )}
    </Container>
  );
}

export default Home;
