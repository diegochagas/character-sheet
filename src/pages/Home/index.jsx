import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import SelectPlayer from '../../components/SelectPlayer';
import { getCharacters } from '../../services/api';
import { resolveInitiative, resolveTurn } from './battle';

import { Container } from './styles';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [resultsDisplay, setResultsDisplay] = useState('none');
  const resultsElement = useRef(null);

  useEffect(() => {
    async function getChars() {
      try {
        const response = await getCharacters();

        setCharacters(response.data);
      } catch (error) {
        console.error('Failed to load characters:', error);
      }
    }

    getChars();
  }, []);

  function renderMessage(message) {
    resultsElement.current.innerHTML = `<p><b>${message}</b></p>${resultsElement.current.innerHTML}`;
  }

  function delay(milliseconds) {
    return new Promise(r => setTimeout(r, milliseconds));
  }

  async function renderMessages(messages) {
    for (let i = 0; i < messages.length; i++) {
      renderMessage(messages[i]);

      await delay(1000);
    }
  }

  async function executeBattle(playerOne, playerTwo) {
    setIsButtonDisabled(true);

    setResultsDisplay('block');

    let first = { ...playerOne, hitPoints: playerOne.constitution * 5 };
    let second = { ...playerTwo, hitPoints: playerTwo.constitution * 5 };

    renderMessage('Roll iniative...');

    await delay(1000);

    const initiative = resolveInitiative(first, second);

    renderMessage(initiative.message);

    await delay(1000);

    if (initiative.firstAttackerIndex === 1) {
      [first, second] = [second, first];
    }

    while (first.hitPoints > 0 && second.hitPoints > 0) {
      const attack = resolveTurn(first, second);

      await renderMessages(attack.messages);

      second = { ...second, hitPoints: attack.defenderHitPoints };

      if (second.hitPoints > 0) {
        const counter = resolveTurn(second, first);

        await renderMessages(counter.messages);

        first = { ...first, hitPoints: counter.defenderHitPoints };
      }
    }

    if (first.hitPoints <= 0) {
      renderMessage(`${first.name} is out of combat.`);

      await delay(1000);

      renderMessage(`${second.name} Wins!`);
    } else {
      renderMessage(`${second.name} is out of combat.`);

      await delay(1000);

      renderMessage(`${first.name} Wins!`);
    }

    setIsButtonDisabled(false);
  }

  function startFight() {
    resultsElement.current.innerHTML = '';

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
              type="button"
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

          <Link to="/add-character">
            Click here to add a new character here!
          </Link>
        </div>
      )}
    </Container>
  );
}

export default Home;
