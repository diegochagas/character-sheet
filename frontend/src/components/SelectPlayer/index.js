import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function SelectPlayer({
  characters,
  setCharacter,
  character,
  setIsButtonDisabled,
  otherPlayer,
}) {
  const [playerDisplay, setPlayerDisplay] = useState('none');

  function choosePlayer(char) {
    if (char !== '') {
      setCharacter(JSON.parse(char.replace(/'/g, '"')));

      setPlayerDisplay('block');
    } else {
      setCharacter({});

      setPlayerDisplay('none');
    }

    if (char !== '' && otherPlayer.name !== undefined) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }

  return (
    <div className="player">
      <select
        id="select-player"
        className="form-control"
        onChange={event => choosePlayer(event.target.value)}
      >
        <option value="">Choose your player</option>

        {characters.map(char => (
          <option value={JSON.stringify(char)} key={char.id}>
            {char.name}
          </option>
        ))}
      </select>

      <div id="player" className="player" style={{ display: playerDisplay }}>
        <p>
          <b>
            Name: <span id="name">{character.name}</span>
          </b>
        </p>
        <p>
          <b>
            Strength: <span id="strength">{character.strength}</span>
          </b>
        </p>
        <p>
          <b>
            Skills: <span id="skills">{character.skills}</span>
          </b>
        </p>
        <p>
          <b>
            Constitution:{' '}
            <span id="constitution">{character.constitution}</span>
          </b>
        </p>
        <p>
          <b>
            Armor: <span id="armor">{character.armor}</span>
          </b>
        </p>
        <p>
          <b>
            Firepower: <span id="firepower">{character.firePower}</span>
          </b>
        </p>

        <p>
          <b>
            Hit points:{' '}
            <span id="hit-points">
              {character.constitution ? character.constitution * 5 : 0}
            </span>
          </b>
        </p>
      </div>
    </div>
  );
}

SelectPlayer.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.any).isRequired,
  setCharacter: PropTypes.func.isRequired,
  character: PropTypes.objectOf(PropTypes.any).isRequired,
  setIsButtonDisabled: PropTypes.func.isRequired,
  otherPlayer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SelectPlayer;
