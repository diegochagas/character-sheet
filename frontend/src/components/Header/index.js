import React from 'react';

// import { Container } from './styles';

export default function Header({
  points,
  setPoints,
  totalCaracteristicas,
  totalVantagens,
  totalDesvantagens,
  pontosDeExperiencia,
}) {
  const pontuacao = [
    { value: 4, name: 'Pessoa comum' },
    { value: 5, name: 'Novato' },
    { value: 7, name: 'Lutador' },
    { value: 10, name: 'Campeão' },
    { value: 12, name: 'Lenda' },
  ];

  function pontosDePersonagem(experiencia) {
    let pontos = 0;
    if (experiencia !== undefined) pontos = Math.floor(experiencia / 10);
    return pontos;
  }

  return (
    <header className="App-header header-ficha col-xs-12">
      <h2>3D&T • Defensores de Tóquio 3ª Edição Alpha</h2>
      <h1>Ficha de Personagem</h1>
      <div className="fundo">
        <label className="" htmlFor="nome">
          Nome
        </label>

        <input
          type="text"
          name="nome"
          ng-model="nome"
          required
          ng-maxlength="255"
          id="nome"
        />
        <span
          ng-show="ficha.nome.$touched && (ficha.nome.$error.required || ficha.nome.$error.maxlength)"
          className="glyphicon glyphicon-remove form-control-feedback"
          aria-hidden="true"
        />

        <label className="" htmlFor="pontos">
          Pontos
        </label>

        <input
          className=""
          type="number"
          name="pontos"
          placeholder="0"
          min="0"
          max="999"
          value={
            points -
            totalCaracteristicas -
            totalVantagens +
            totalDesvantagens * -1 +
            pontosDePersonagem(pontosDeExperiencia)
          }
          disabled
        />

        <label className="" htmlFor="nome">
          Escala
        </label>

        <select
          className=""
          name="pontuacao"
          required
          onChange={event => setPoints(event.target.value)}
        >
          <option value="">Pontos</option>

          {pontuacao.map(option => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <span
        ng-show="ficha.nome.$touched && ficha.nome.$error.required"
        className="form-control alert-danger"
      >
        Nome obrigatório
      </span>
      <span
        ng-show="ficha.nome.$touched && ficha.nome.$error.maxlength"
        className="form-control alert-danger"
      >
        Máximo de 255 caracteres
      </span>
      <span ng-show="minimoPontos()" className="form-control alert-danger">
        Mínimo de 0 pontos
      </span>
    </header>
  );
}
