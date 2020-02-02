import React, { useState } from 'react';

// import { Container } from './styles';

export default function Skills({ strength }) {
  const damageTypes = [
    {
      id: 1,
      damage: 'Dano Físico',
      type: 'Corte',
      description: 'Lâminas ou objetos afiados. Espadas, machados, garras...',
    },
    {
      id: 2,
      damage: 'Dano Físico',
      type: 'Perfuração',
      description:
        'Armas pontudas ou armas de fogo. Flechas, lanças, adagas, dardos, espinhos, chifres, pistolas..',
    },
    {
      id: 3,
      damage: 'Dano Físico',
      type: 'Esmagamento',
      description:
        'Armas sem partes afiadas ou pontudas, ou deslocamento de matéria (como explosões). Socos, chutes, clavas, martelos, pedras, bombas, granadas...',
    },
    {
      id: 4,
      damage: 'Dano por Energia',
      type: 'Fogo',
      description:
        'Lança-chamas, bolas de fogo, raio laser, bombas incendiárias...',
    },
    {
      id: 5,
      damage: 'Dano por Energia',
      type: 'Frio',
      description: 'Raio congelante, bolas de neve, chuva de gelo...',
    },
    {
      id: 6,
      damage: 'Dano por Energia',
      type: 'Elétrico',
      description: 'Choques e relâmpagos em geral.',
    },
    {
      id: 7,
      damage: 'Dano por Energia',
      type: 'Químico',
      description:
        'Ácido, fumaça, veneno, toxinas, poluentes, líquidos perigosos em geral...',
    },
    {
      id: 8,
      damage: 'Dano por Energia',
      type: 'Sônico',
      description: 'Estrondo sônico, vento, magias musicais...',
    },
  ];

  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState({});

  const magiasConhecidas = [
    { id: 1, label: 'Ataque Mágico' },
    { id: 2, label: 'Cancelamento de Magia' },
    { id: 3, label: 'Detecção de Magia' },
    { id: 4, label: 'Força Mágica' },
    { id: 5, label: 'Pequenos Desejos' },
    { id: 6, label: 'Proteção Mágica' },
  ];

  return (
    <div className="habilidades col-xs-12 col-sm-6">
      <div className="form-group">
        <h3>Tipos de dano</h3>

        <div className="tipos-de-dano">
          <div className="select-tiposDeDano">
            <select
              className="form-control"
              name="tipos-de-dano"
              value={selectedType.type}
              onChange={event => setSelectedType(Number(event.target.value))}
            >
              <option value={0}>-- Tipos de Dano --</option>

              {damageTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.type}
                </option>
              ))}
            </select>

            <button
              className="btn btn-default"
              type="button"
              onClick={() => setTypes([...types, Number(selectedType)])}
              disabled={selectedType.id === 0 || types.length > strength}
            >
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
        <div className="lista">
          <div
            className="adicionados"
            ng-repeat="tipoDeDano in tiposDeDanoAdicionados"
          >
            {types.map(type => (
              <span key={type.type} className="texto">
                {damageTypes.find(damage => {
                  if (type === damage.id) return damage.type;
                })}
                ,{' '}
              </span>
            ))}
            <div className="label label-danger">
              <i
                className="fas fa-minus"
                ng-click="removeTipoDeDano(tipoDeDano)"
              />
            </div>
          </div>
        </div>
        <textarea className="form-control" name="magias-conhecidas" rows="2" />
      </div>
      <div className="form-group">
        <h3>Magias conhecidas</h3>
        <div className="lista">
          <div className="adicionados" ng-repeat="magias in magiasConhecidas">
            {magiasConhecidas.map(magias => (
              <span key={magias.label} className="texto">
                {magias.label},
              </span>
            ))}
          </div>
        </div>

        <textarea className="form-control" name="magias-conhecidas" rows="4" />
      </div>
      <div className="form-group has-feedback">
        <h3>Dinheiro e itens</h3>
        <textarea
          className="form-control"
          name="dinheiroItens"
          ng-model="dinheiroItens"
          rows="5"
          required
        />
        {/* <span ng-show="ficha.dinheiroItens.$touched && ficha.dinheiroItens.$error.required" className="form-control alert-danger">Campo obrigatório</span> */}
      </div>
    </div>
  );
}
