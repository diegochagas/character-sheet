import React from 'react';

// import { Container } from './styles';

export default function Description() {
  return (
    <div className="descricoes col-xs-12 col-sm-6">
      <div className="form-group has-feedback">
        <h3>História</h3>
        <textarea
          className="form-control"
          name="historia"
          rows="6"
          ng-model="historia"
          required
        />
        {/* <span ng-show="ficha.historia.$touched && ficha.historia.$error.required" className="form-control alert-danger">Campo obrigatório</span> */}
      </div>
      <div className="turno-de-combate fundo">
        <h3>Turno de combate</h3>
        <p>
          <strong>Passo 1 - Iniciativa: </strong>cada combatente rola um dado e
          acrescenta ao resultado sua Habilidade. Inclua +1 por Aceleração ou +2
          por Teleporte (não cumulativos), quando houver Combatentes com
          iniciativa mais alta agem primeiro.
        </p>
        <p>
          <strong>Passo 2 - Força de Ataque (FA): </strong>os personagens
          escolhem seus alvos e fazem seus ataques ou manobras, cada um em sua
          iniciativa. A Força de Ataque de cada um será igual a H+F+1d (para
          ataques corpo-a-corpo), ou H+PdF+1d (para ataques à longa distância),
          à escolha do jogador. Essa escolha deve ser feita antes da rolagem.
        </p>
        <p>
          <strong>Passo 3 - Força de Defesa (FD): </strong>a Força de Defesa da
          vítima será igual a H+A+1d, Subtraia esse valor da FA do atacante. O
          resultado final será a quantidade de Pontos de Vida perdidos pela
          vítima, Caso a FD final do alvo seja qual ou superior à FA final do
          atacante, nenhum dano é provocado.
        </p>
      </div>
    </div>
  );
}
