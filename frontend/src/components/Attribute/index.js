import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Attribute({
  name,
  label,
  value,
  setAttribute,
  experience,
}) {
  return (
    <div key={name} className="form-group fundo has-feedback">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="number"
        min="0"
        max="999"
        value={value}
        onChange={event => setAttribute(Number(event.target.value))}
      />

      {value > 5 && experience === 0 ? (
        <span className="form-control alert-danger">
          Máximo de 5 para recém-criados
        </span>
      ) : null}
    </div>
  );
}

Attribute.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  setAttribute: PropTypes.func,
  experience: PropTypes.number,
};
