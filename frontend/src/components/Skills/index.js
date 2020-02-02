import React, { useState } from 'react';

// import { Container } from './styles';
import { types, spells } from '../../services/api';

export default function Skills() {
  const [damageTypes, setDamageTypes] = useState(
    types.map(damage => damage.type).sort()
  );
  const knownSpells = spells.map(spell => spell.name).sort();
  const [selectedOption, setSelectedOption] = useState('');
  const [choosenTypes, setChoosenTypes] = useState([]);
  const [moneyTouched, setMoneyTouched] = useState(false);
  const [money, setMoney] = useState('');

  function addDamageType() {
    const newList = damageTypes;

    newList.splice(damageTypes.indexOf(selectedOption), 1);

    setDamageTypes(newList);

    setChoosenTypes([...choosenTypes, selectedOption].sort());

    setSelectedOption('');
  }

  function removeDamageType(type) {
    const newList = choosenTypes;

    newList.splice(choosenTypes.indexOf(type), 1);

    setChoosenTypes(newList);

    setDamageTypes([...damageTypes, type].sort());
  }

  return (
    <div className="habilidades col-xs-12 col-sm-6">
      <div className="form-group">
        <h3>Tipos de dano</h3>

        <div className="tipos-de-dano">
          <div className="select-tiposDeDano">
            <select
              className="form-control"
              name="tipos-de-dano"
              onChange={event => setSelectedOption(event.target.value)}
            >
              <option value="">-- Tipos de Dano --</option>

              {damageTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <button
              className="btn btn-default"
              type="button"
              onClick={addDamageType}
              disabled={!selectedOption}
            >
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
        <div className="lista">
          {choosenTypes.map(type => (
            <div key={type} className="adicionados">
              <span className="texto">{type} </span>
              <span className="badge badge-danger">
                <i
                  className="fas fa-minus"
                  onClick={() => removeDamageType(type)}
                />
              </span>
              ,{' '}
            </div>
          ))}
        </div>

        <textarea className="form-control" name="magias-conhecidas" rows="2" />
      </div>

      <div className="form-group">
        <h3>Magias conhecidas</h3>

        <div className="lista">
          {knownSpells.map(spell => (
            <div key={spell} className="adicionados">
              <span className="texto">{spell}, </span>
            </div>
          ))}
        </div>

        <textarea className="form-control" name="magias-conhecidas" rows="4" />
      </div>

      <div className="form-group has-feedback">
        <h3>Dinheiro e itens</h3>

        <textarea
          className="form-control"
          name="dinheiroItens"
          onBlur={() => setMoneyTouched(true)}
          rows="5"
          required
          onChange={event => setMoney(event.target.value)}
        />

        {moneyTouched && !money.length ? (
          <span className="form-control alert-danger">Campo obrigatório</span>
        ) : null}
      </div>
    </div>
  );
}
