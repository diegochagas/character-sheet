import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Header({ scales, setInitialPoints, points }) {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);

  return (
    <header className="App-header header-ficha col-xs-12">
      <h2>3D&T • Defensores de Tóquio 3ª Edição Alpha</h2>

      <h1>Ficha de Personagem</h1>

      <div className="fundo">
        <label htmlFor="name">Nome</label>

        <input
          id="name"
          className={
            (nameTouched && name.length <= 0) || name.length > 100
              ? 'has-error'
              : ''
          }
          type="text"
          required
          onBlur={() => setNameTouched(true)}
          onChange={event => setName(event.target.value)}
        />

        <label htmlFor="points">Pontos</label>

        <input
          id="points"
          type="number"
          placeholder="0"
          min="0"
          max="999"
          value={points}
          disabled
        />

        <select
          required
          onChange={event => setInitialPoints(Number(event.target.value))}
        >
          <option value="">Pontos</option>

          {scales.map(scale => (
            <option key={scale.value} value={scale.value}>
              {scale.label}
            </option>
          ))}
        </select>
      </div>

      {nameTouched && name.length <= 0 ? (
        <span className="form-control alert-danger">Nome obrigatório</span>
      ) : null}

      {name.length > 100 ? (
        <span className="form-control alert-danger">
          Máximo de 100 caracteres
        </span>
      ) : null}

      {points < 0 ? (
        <span className="form-control alert-danger">Mínimo de 0 pontos</span>
      ) : null}
    </header>
  );
}

Header.propTypes = {
  initialPoints: PropTypes.array,
  points: PropTypes.number,
  setPoints: PropTypes.func,
};
