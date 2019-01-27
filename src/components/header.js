import React from 'react';

export default function Header(){
	return(
		<header className="App-header header-ficha col-xs-12">
              <h2>3D&T • Defensores de Tóquio 3ª Edição Alpha</h2>
              <h1>Ficha de Personagem</h1>
              <div className="fundo">
                <div className="nome col-xs-12">
                  <label className="col-xs-3 col-sm-2" htmlFor="nome">Nome</label>
                  <div className="col-xs-9 col-sm-10">
                    <input className="form-control" type="text" name="nome" ng-model="nome" required ng-maxlength="255" id="nome"/>
                    <span ng-show="ficha.nome.$touched && (ficha.nome.$error.required || ficha.nome.$error.maxlength)" className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                  </div>        
                </div>
                <div className="pontoshas-feedback">
                  <label className="col-xs-3 col-sm-2" htmlFor="nome">Pontos</label>
                  <input className="" type="number" name="pontos" placeholder="0" min="0" max="999" value="{{pontuacao.selectedOption.value - totalCaracteristicas - totalVantagens + (totalDesvantagens*(-1)) + pontosDePersonagem(pontosDeExperiencia)}}" disabled/>
                </div>
                <div className="scale has-feedback">
                  <label className="col-xs-3 col-sm-2" htmlFor="nome">Escala</label>
                  <select className="" name="pontuacao" ng-options="option.name for option in pontuacao.availableOptions track by option.value" ng-model="pontuacao.selectedOption" required>
                  </select>           
                </div>
              </div>
              {/*<span ng-show="ficha.nome.$touched && ficha.nome.$error.required" className="form-control alert-danger">Nome obrigatório</span>
              <span ng-show="ficha.nome.$touched && ficha.nome.$error.maxlength" className="form-control alert-danger">Máximo de 255 caracteres</span>
              <span ng-show="minimoPontos()" className="form-control alert-danger">Mínimo de 0 pontos</span>*/}
            </header>
	);	
}