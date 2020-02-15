import React, { useState } from 'react';

// import { Container } from './styles';
import { uniqueAdvantages, classes, advantagens } from '../../../services/api';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';

export default function Advantages() {
  const [races, setRaces] = useState(
    uniqueAdvantages.map(uniqueAdvantage => uniqueAdvantage.label).sort()
  );
  const [kits, setKits] = useState(classes.map(kit => kit.label).sort());
  const [advantagensList, setAdvantagensList] = useState(
    advantagens.map(advantage => advantage.label).sort()
  );
  const [choosen, setChoosen] = useState([]);

  function setItems(items) {
    console.log(items);

    setAdvantagensList();
    setRaces();
    setKits();
  }

  return (
    <div className="vantagens-desvantagens col-xs-12 col-sm-6">
      <div className="form-group">
        <h2>Vantagens</h2>

        <Select
          defaultOption="-- Vantagens únicas --"
          items={races}
          setItems={setRaces}
          choosen={choosen}
          setChoosen={setChoosen}
        />

        <Select
          defaultOption="-- Kits --"
          items={kits}
          setItems={setKits}
          choosen={choosen}
          setChoosen={setChoosen}
        />

        <Select
          defaultOption="-- Vantagens --"
          items={advantagensList}
          setItems={setAdvantagensList}
          choosen={choosen}
          setChoosen={setChoosen}
        />

        <TextArea
          items={[...races, ...kits, ...advantagensList]}
          setItems={setItems}
          choosen={choosen}
          setChoosen={setChoosen}
          rows="6"
        />
      </div>

      <div className="form-group">
        <h2>Desvantagens</h2>
        <div className="desvantagens">
          <div className="select-desvantagens">
            <select
              className="form-control"
              name="desvantagens"
              ng-model="desvantagens.selectedOption"
              ng-options="(option.label + ' (' + option.value + ')') for option in desvantagens.availableOptions track by option.id"
            >
              <option value="">Desvantagens</option>
            </select>
            <button
              className="btn btn-default"
              type="button"
              id="adddesvantagem"
              ng-click="addDesvantagem(desvantagens.selectedOption)"
              ng-disabled="desvantagens.selectedOption.id == 0"
            >
              <i className="fas fa-plus" />
            </button>
          </div>
          <div className="lista">
            <div
              className="adicionados"
              ng-repeat="desvantagem in desvantagensCompradas"
              value="{{desvantagem.value}}"
            >
              <span className="texto">
                {/* {{desvantagem.label}} ({{desvantagem.value}}) */}
              </span>
              <div className="label label-danger">
                <i
                  className="fas fa-minus"
                  ng-click="removeDesvantagem(desvantagem)"
                />
              </div>
            </div>
          </div>
          <textarea
            className="form-control"
            name="vantagens-escritas"
            rows="5"
          />
        </div>
      </div>
    </div>
  );
}
