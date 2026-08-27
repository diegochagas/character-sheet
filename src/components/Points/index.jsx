import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';
function Points({
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

      {points + lostPoints <= 0 ? (
        <span className="form-control alert-danger">
          0 {children} ou menos.
        </span>
      ) : null}
    </div>
  );
}

Points.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  setPoints: PropTypes.func.isRequired,
  lostPoints: PropTypes.number.isRequired,
  setLostPoints: PropTypes.func.isRequired,
};

export default Points;
