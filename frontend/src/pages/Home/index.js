import React, { useState } from 'react';

import Header from '../../components/Header';
import Characteristics from '../../components/Characteristics';
import Skills from '../../components/Skills';
import Advantages from '../../components/Advantages';
import Description from '../../components/Description';

import { Container } from './styles';

export default function Home() {
  const [strength, setStrength] = useState(0);
  const [skill, setSkill] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [protection, setProtection] = useState(0);
  const [firePower, setFirePower] = useState(0);
  const [points, setPoints] = useState(0);
  const [totalCaracteristicas, setTotalCaracteristicas] = useState(0);
  const [totalVantagens, setTotalVantagens] = useState(0);
  const [totalDesvantagens, setTotalDesvantagens] = useState(0);
  const [experience, setExperience] = useState(0);

  function caracteristicas(attributeValue) {
    let pontosGastosAtualmente = 5;

    if (attributeValue >= 0 && attributeValue <= 5) {
      console.log(totalCaracteristicas, attributeValue);

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
    <Container className="App ficha-de-personagem container">
      <div className="ficha">
        <Header
          points={points}
          totalCaracteristicas={totalCaracteristicas}
          totalVantagens={totalVantagens}
          totalDesvantagens={totalDesvantagens}
          experience={experience}
          setPoints={setPoints}
        />

        <form className="row" name="ficha" noValidate>
          <Characteristics
            strength={strength}
            setStrength={setStrength}
            skill={skill}
            setSkill={setSkill}
            constitution={constitution}
            setConstitution={setConstitution}
            protection={protection}
            setProtection={setProtection}
            firePower={firePower}
            setFirePower={setFirePower}
            experience={experience}
            setExperience={setExperience}
          />

          <Skills points={points} setPoints={setPoints} />

          <Advantages
            totalVantagens={totalVantagens}
            setTotalVantagens={setTotalVantagens}
            totalDesvantagens={totalDesvantagens}
            setTotalDesvantagens={setTotalDesvantagens}
          />

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
