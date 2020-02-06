import React, { useState } from 'react';

// import { Container } from './styles';
import { uniqueAdvantages } from '../../services/api';

export default function Advantages() {
  const [selectedOption, setSelectedOption] = useState('');

  function addUniqueAdvantage() {}

  return (
    <div className="vantagens-desvantagens col-xs-12 col-sm-6">
      <div className="form-group">
        <h2>Vantagens</h2>
        <div className="vantagens-unicas input-group">
          <select
            className="form-control"
            name="vantagens-unicas"
            onChange={event => setSelectedOption(event.target.value)}
          >
            <option value="">Vantagens Únicas</option>

            {uniqueAdvantages.map(advantage => (
              <option key={advantage.id} value={advantage.label}>
                {advantage.label}
              </option>
            ))}
          </select>

          <button
            className="btn btn-default"
            type="button"
            onClick={addUniqueAdvantage}
            disabled={!selectedOption}
          >
            <i className="fas fa-plus" />
          </button>
        </div>
        <div className="kits">
          <div className="select-kits">
            <select
              className="form-control"
              name="kits"
              ng-model="kits.selectedOption"
              ng-options="option.label for option in kits.availableOptions track by option.id"
            >
              <option value="">Kits</option>
            </select>
            <button
              className="btn btn-default"
              type="button"
              id="addkit"
              ng-click="addKit(kits.selectedOption)"
              ng-disabled="kits.selectedOption.id == 0"
            >
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
        <div className="vantagens">
          <div className="select-vantagens">
            <select
              className="form-control"
              name="vantagens"
              ng-model="vantagens.selectedOption"
              ng-options="(option.label + ' (' + option.value + ')') for option in vantagens.availableOptions track by option.id"
            >
              <option value="">Vantagens</option>
            </select>
            <button
              className="btn btn-default"
              type="button"
              id="addVantagem"
              ng-click="addVantagem(vantagens.selectedOption)"
              ng-disabled="vantagens.selectedOption.id == 0"
            >
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
        <div className="lista">
          <div className="adicionados">
            <span className="texto">
              {/* {{vantagensUnicas.selectedOption.label}} */}
            </span>
          </div>
          <div
            className="adicionados"
            ng-repeat="kit in kitsComprados"
            value="{{kit.value}}"
          >
            <span className="texto">{/* {{kit.label}} ({{$index}}) */}</span>
            <div className="label label-danger">
              <i className="fas fa-minus" ng-click="removeKit(kit)" />
            </div>
          </div>
          <div
            className="adicionados"
            ng-repeat="vantagem in vantagensCompradas"
            value="{{vantagem.value}}"
          >
            <span className="texto">
              {/* {{vantagem.label}} ({{vantagem.value}}) */}
            </span>
            <div className="label label-danger">
              <i className="fas fa-minus" ng-click="removeVantagem(vantagem)" />
            </div>
          </div>
        </div>
        <textarea className="form-control" name="vantagens-escritas" rows="6" />
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
