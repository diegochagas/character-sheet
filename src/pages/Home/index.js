import React from 'react';

// import { Container } from './styles';
import Header from '../../components/Header';
import Characteristics from '../../components/Characteristics';
import Skills from '../../components/Skills';
import Advantages from '../../components/Advantages';
import Description from '../../components/Description';

export default function Home() {
  return (
    <div
      className="App ficha-de-personagem container"
      ng-controller="FichaDePersonagem"
    >
      <div className="ficha">
        <Header />

        <form className="row" name="ficha" noValidate>
          <Characteristics />

          <Skills />

          <Advantages />

          <Description />

          <div className="form-group salvar-ficha">
            <button
              className="btn btn-primary"
              type="submit"
              name="botao"
              ng-disabled="ficha.$invalid"
            >
              Salvar personagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
