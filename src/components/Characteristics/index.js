import React from 'react';

// import { Container } from './styles';

export default function Characteristics() {
  return (
    <div className="caracteristicas col-xs-12 col-sm-6">
      <h2>Características</h2>
      <div className="form-group fundo has-feedback">
        <label htmlFor="">Força</label>
        <input
          className=""
          type="number"
          name="forca"
          placeholder="0"
          min="0"
          max="999"
          ng-model="forca"
          ng-change="caracteristicas()"
        />
        {/* <span ng-show="maximo(forca) && pontosDeExperiencia == 0" className="form-control alert-danger">{{mensagemMaximo}}</span> */}
      </div>
      <div className="form-group fundo has-feedback">
        <label htmlFor="">Habilidade</label>
        <input
          className=""
          type="number"
          name="habilidade"
          placeholder="0"
          min="0"
          max="999"
          ng-model="habilidade"
          ng-change="caracteristicas()"
        />
        {/* <span ng-show="maximo(habilidade) && pontosDeExperiencia == 0" className="form-control alert-danger">{{mensagemMaximo}}</span> */}
      </div>
      <div className="form-group fundo has-feedback">
        <label htmlFor="">Resistência</label>
        <input
          className=""
          type="number"
          namm="resistencia"
          placeholder="0"
          min="0"
          max="999"
          ng-model="resistencia"
          ng-change="caracteristicas()"
        />
        {/* <span ng-show="maximo(resistencia) && pontosDeExperiencia == 0" className="form-control alert-danger">{{mensagemMaximo}}</span> */}
      </div>
      <div className="form-group fundo has-feedback">
        <label htmlFor="">Armadura</label>
        <input
          className=""
          type="number"
          name="armadura"
          placeholder="0"
          min="0"
          max="999"
          ng-model="armadura"
          ng-change="caracteristicas()"
        />
        {/* <span ng-show="maximo(armadura) && pontosDeExperiencia == 0" className="form-control alert-danger">{{mensagemMaximo}}</span> */}
      </div>
      <div className="form-group fundo has-feedback">
        <label htmlFor="">Poder de fogo</label>
        <input
          className=""
          type="number"
          name="poderDeFogo"
          placeholder="0"
          min="0"
          max="999"
          ng-model="poderDeFogo"
          ng-change="caracteristicas()"
        />
        {/* <span ng-show="maximo(poderDeFogo) && pontosDeExperiencia == 0" className="form-control alert-danger">{{mensagemMaximo}}</span> */}
      </div>
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
