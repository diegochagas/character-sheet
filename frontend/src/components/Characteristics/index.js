import React, { useState } from 'react';

// import { Container } from './styles';

export default function Characteristics({
  totalCaracteristicas,
  setTotalCaracteristicas,
  pontosDeExperiencia,
}) {
  const [pontosDeVida, setPontosDeVida] = useState(1);
  const [pontosDeMagia, setPontosDeMagia] = useState(1);
  const [vidaPerdida, setVidaPerdida] = useState(0);
  const [magiaPerdida, setMagiaPerdida] = useState(0);
  const attributes = [
    'Força',
    'Habilidade',
    'Resistência',
    'Armadura',
    'Poder De Fogo',
  ];

  function caracteristicas(attributeValue) {
    setTotalCaracteristicas(0);

    let pontosGastosAtualmente = 5;

    if (attributeValue >= 0 && attributeValue <= 5) {
      setTotalCaracteristicas(totalCaracteristicas + attributeValue);
    } else if (attributeValue > 5) {
      let pes = attributeValue - pontosGastosAtualmente;

      if (attributeValue > 5 && attributeValue <= 10)
        setTotalCaracteristicas(
          totalCaracteristicas + pontosGastosAtualmente + pes * 2
        );
      if (attributeValue > 10 && attributeValue <= 15) {
        pes = attributeValue - 10;

        pontosGastosAtualmente = 15;

        setTotalCaracteristicas(
          totalCaracteristicas + pontosGastosAtualmente + pes * 3
        );
      }
      if (attributeValue > 15 && attributeValue <= 20) {
        pes = attributeValue - 15;

        pontosGastosAtualmente = 30;

        setTotalCaracteristicas(
          totalCaracteristicas + pontosGastosAtualmente + pes * 5
        );
      }
      if (attributeValue > 20) {
        pes = attributeValue - 20;

        pontosGastosAtualmente = 55;

        setTotalCaracteristicas(
          totalCaracteristicas + pontosGastosAtualmente + pes * 10
        );
      }
    }
  }

  return (
    <div className="caracteristicas col-xs-12 col-sm-6">
      <h2>Características</h2>

      {attributes.map(attribute => {
        let attributeValue = 0;

        return (
          <div key={attribute} className="form-group fundo has-feedback">
            <label htmlFor="">{attribute}</label>

            <input
              className=""
              type="number"
              placeholder="0"
              min="0"
              max="999"
              onChange={event => {
                attributeValue = event.target.value;

                caracteristicas(attributeValue);
              }}
            />

            {attributeValue > 5 && pontosDeExperiencia === 0 ? (
              <span className="form-control alert-danger">
                Máximo de 5 para recém-criados
              </span>
            ) : null}
          </div>
        );
      })}

      <div className="pontos">
        <div className="form-group fundo">
          <label htmlFor="">
            Pontos de <span>v</span>ida
          </label>
          <input
            className=""
            type="number"
            name="ponto-de-vida"
            placeholder="1"
            min="0"
            max="999"
            value="{{resistencia * pontosDeVida + vidaPerdida}}"
            disabled
          />
          <input
            className=""
            type="number"
            name="vida-perdida"
            placeholder="0"
            min="-999"
            max="0"
            ng-model="vidaPerdida"
          />
        </div>
        <div className="form-group fundo">
          <label htmlFor="">
            Pontos de <span>m</span>agia
          </label>
          <input
            className=""
            type="number"
            name="ponto-de-magia"
            placeholder="1"
            min="0"
            max="999"
            value="{{resistencia * pontosDeMagia + magiaPerdida}}"
            disabled
          />
          <input
            className=""
            type="number"
            name="magia-perdida"
            placeholder="0"
            min="-999"
            max="0"
            ng-model="magiaPerdida"
          />
        </div>
        <div className="form-group fundo">
          <label htmlFor="">
            Pontos de <span>e</span>xperiência
          </label>
          <input
            className=""
            type="number"
            name="pontos-de-experiencia"
            placeholder="0"
            min="0"
            max="9999"
            ng-model="pontosDeExperiencia"
          />
        </div>
      </div>
    </div>
  );
}
