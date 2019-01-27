import React, { Component } from 'react';
import './css/App.css';
import Header from './components/header';
import Characteristics from './components/characteristics';
import Skills from './components/skills';
import Advantages from './components/advantages';
import Description from './components/description';

class App extends Component {
  render() {
    return (
      <div className="App ficha-de-personagem container" ng-controller="FichaDePersonagem">
        <div className="ficha">
          <Header/>
          <form className="row" name="ficha" noValidate>
            <Characteristics/>
            <Skills/>
            <Advantages/>
            <Description/>
            <div className="form-group salvar-ficha">
              <button className="btn btn-primary" type="submit" name="botao" ng-disabled="ficha.$invalid">Salvar personagem</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
