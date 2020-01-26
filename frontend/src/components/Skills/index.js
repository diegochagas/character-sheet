import React from 'react';

// import { Container } from './styles';

export default function Skills() {
  const tiposDeDano = [
    {
      id: 1,
      dano: 'Dano Físico',
      tipo: 'Corte',
      descricao: 'Lâminas ou objetos afiados. Espadas, machados, garras...',
    },
    {
      id: 2,
      dano: 'Dano Físico',
      tipo: 'Perfuração',
      descricao:
        'Armas pontudas ou armas de fogo. Flechas, lanças, adagas, dardos, espinhos, chifres, pistolas..',
    },
    {
      id: 3,
      dano: 'Dano Físico',
      tipo: 'Esmagamento',
      descricao:
        'Armas sem partes afiadas ou pontudas, ou deslocamento de matéria (como explosões). Socos, chutes, clavas, martelos, pedras, bombas, granadas...',
    },
    {
      id: 4,
      dano: 'Dano por Energia',
      tipo: 'Fogo',
      descricao:
        'Lança-chamas, bolas de fogo, raio laser, bombas incendiárias...',
    },
    {
      id: 5,
      dano: 'Dano por Energia',
      tipo: 'Frio',
      descricao: 'Raio congelante, bolas de neve, chuva de gelo...',
    },
    {
      id: 6,
      dano: 'Dano por Energia',
      tipo: 'Elétrico',
      descricao: 'Choques e relâmpagos em geral.',
    },
    {
      id: 7,
      dano: 'Dano por Energia',
      tipo: 'Químico',
      descricao:
        'Ácido, fumaça, veneno, toxinas, poluentes, líquidos perigosos em geral...',
    },
    {
      id: 8,
      dano: 'Dano por Energia',
      tipo: 'Sônico',
      descricao: 'Estrondo sônico, vento, magias musicais...',
    },
  ];

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
              ng-model="tiposDeDano.selectedOption"
              ng-options="option.tipo group by option.dano for option in tiposDeDano.availableOptions track by option.id"
            >
              <option value="">-- Tipos de Dano --</option>

              {tiposDeDano.map(tipo => (
                <option key={tipo.tipo} value={tipo.tipo}>
                  {tipo.tipo}
                </option>
              ))}
            </select>
            <button
              className="btn btn-default"
              type="button"
              ng-click="addTipoDeDano(tiposDeDano.selectedOption)"
              ng-disabled="tiposDeDano.selectedOption.id == 0 || totalTipos > forca"
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
            {tiposDeDano.map(tipo => (
              <span key={tipo.tipo} className="texto">
                {tipo.tipo},{' '}
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
