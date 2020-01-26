import React, { useState } from 'react';

import Header from '../../components/Header';
import Characteristics from '../../components/Characteristics';
import Skills from '../../components/Skills';
import Advantages from '../../components/Advantages';
import Description from '../../components/Description';

import { Container } from './styles';

export default function Home() {
  const [points, setPoints] = useState(0);

  return (
    <Container
      className="App ficha-de-personagem container"
      ng-controller="FichaDePersonagem"
    >
      <div className="ficha">
        <Header points={points} setPoints={setPoints} />

        <form className="row" name="ficha" noValidate>
          <Characteristics points={points} setPoints={setPoints} />

          <Skills points={points} setPoints={setPoints} />

          <Advantages points={points} setPoints={setPoints} />

          <Description points={points} setPoints={setPoints} />

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
    </Container>
  );
}
