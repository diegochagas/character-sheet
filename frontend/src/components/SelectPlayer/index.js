import React, { useState } from 'react';

// import { Container } from './styles';

function SelectPlayer({ characters, setCharacter, character, setIsButtonDisabled, otherPlayer }) {
  const [playerDisplay, setPlayerDisplay] = useState('none');

  function choosePlayer(character) {
    if (character !== "") {
      setCharacter(JSON.parse(character.replace(/'/g, "\"")));

      setPlayerDisplay("block");
    } else {
      setCharacter({});

      setPlayerDisplay("none");
    }

    if (character !== "" && otherPlayer.name !== undefined) {
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

        {characters.map(character => <option value={JSON.stringify(character)} key={character.id}>{character["name"]}</option>)}
      </select>

      <div id="player" className="player" style={{ display: playerDisplay }}>
        <p>
          <b>Name: <span id="name">{character.name}</span></b>
        </p>
        <p>
          <b>Strength: <span id="strength">{character.strength}</span></b>
        </p>
        <p>
          <b>Skills: <span id="skills">{character.skills}</span></b>
        </p>
        <p>
          <b>Constitution: <span id="constitution">{character.constitution}</span></b>
        </p>
        <p>
          <b>Armor: <span id="armor">{character.armor}</span></b>
        </p>
        <p>
          <b>Firepower: <span id="firepower">{character.firePower}</span></b>
        </p>

        <p>
          <b>Hit points: <span id="hit-points">{character.constitution ? character.constitution * 5 : 0}</span></b>
        </p>
      </div>
    </div>
  );
}

export default SelectPlayer;
