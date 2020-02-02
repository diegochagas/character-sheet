import React from 'react';

// import { Container } from './styles';

export default function Points({
  children,
  name,
  points,
  setPoints,
  lostPoints,
  setLostPoints,
}) {
  const isNotExperience = !(name === 'experience');

  return (
    <div className="form-group fundo">
      <label htmlFor={name}>{children}</label>

      <input
        id={name}
        type="number"
        placeholder="1"
        min="0"
        max="999"
        value={points}
        onChange={event => setPoints(Number(event.target.value))}
        disabled={isNotExperience}
      />

      {isNotExperience ? (
        <input
          type="number"
          placeholder="0"
          min="-999"
          max="0"
          value={lostPoints}
          onChange={event => setLostPoints(Number(event.target.value))}
        />
      ) : null}
    </div>
  );
}
