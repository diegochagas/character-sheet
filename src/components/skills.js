import React from 'react';

export default function Skills(){
	return(
		<div className="habilidades col-xs-12 col-sm-6">
      	<div className="form-group">
        <h3>Tipos de dano</h3>
        <div className="tipos-de-dano">
          <div className="select-tiposDeDano">
            <select className="form-control" name="tipos-de-dano" ng-model="tiposDeDano.selectedOption" ng-options="option.tipo group by option.dano for option in tiposDeDano.availableOptions track by option.id">
              <option value="">-- Tipos de Dano --</option>
            </select> 
            <button className="btn btn-default" type="button" ng-click="addTipoDeDano(tiposDeDano.selectedOption)" ng-disabled="tiposDeDano.selectedOption.id == 0 || totalTipos > forca">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="lista">
          <div className="adicionados" ng-repeat="tipoDeDano in tiposDeDanoAdicionados">  
            {/*<span className="texto">{{tipoDeDano.tipo}}</span>*/}
            <div className="label label-danger">
              <i className="fas fa-minus" ng-click="removeTipoDeDano(tipoDeDano)"></i>
            </div>
          </div>
        </div>
        <textarea className="form-control" name="magias-conhecidas" rows="2"></textarea>
      </div>
      <div className="form-group">
        <h3>Magias conhecidas</h3>
        <div className="lista">
          <div className="adicionados" ng-repeat="magias in magiasConhecidas">  
            {/*<span className="texto">{{magias.label}},</span>*/}
          </div>
        </div>
        <textarea className="form-control" name="magias-conhecidas" rows="4"></textarea>
      </div>
      <div className="form-group has-feedback">
        <h3>Dinheiro e itens</h3>
        <textarea className="form-control" name="dinheiroItens" ng-model="dinheiroItens" rows="5" required></textarea>
        {/*<span ng-show="ficha.dinheiroItens.$touched && ficha.dinheiroItens.$error.required" className="form-control alert-danger">Campo obrigatório</span>*/}
      </div>
    </div>
	);
}