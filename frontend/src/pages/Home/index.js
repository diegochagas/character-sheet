import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Characteristics from '../../components/Characteristics';
import Skills from '../../components/Skills';
import Advantages from '../../components/Advantages';
import Description from '../../components/Description';

import { Container } from './styles';

export default function Home() {
  const [initialPoints, setInitialPoints] = useState(0);
  const [points, setPoints] = useState(0);
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [armor, setArmor] = useState(0);
  const [distanceAttacks, setDistanceAttacks] = useState(0);
  const [advantages, setAdvantages] = useState(0);
  const [disadvantages, setDisadvantages] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    setPoints(
      initialPoints +
        Math.floor(experience / 10) -
        calculateCharacteristics(strength) -
        calculateCharacteristics(dexterity) -
        calculateCharacteristics(constitution) -
        calculateCharacteristics(armor) -
        calculateCharacteristics(distanceAttacks) -
        advantages -
        disadvantages
    );
  }, [
    advantages,
    armor,
    constitution,
    dexterity,
    disadvantages,
    experience,
    distanceAttacks,
    strength,
    initialPoints,
  ]);

  const scales = [
    { value: 4, label: 'Pessoa comum' },
    { value: 5, label: 'Novato' },
    { value: 7, label: 'Lutador' },
    { value: 10, label: 'Campeão' },
    { value: 12, label: 'Lenda' },
  ];

  function calculateCharacteristics(attributeValue) {
    let total = 0;

    for (let i = 1; i <= attributeValue; i++) {
      if (i <= 5) total++;
      else if (i > 5 && i <= 10) total += 2;
      else if (i > 10 && i <= 15) total += 3;
      else if (i > 15 && i <= 20) total += 5;
      else total += 10;
    }

    return total;
  }

  return (
    <Container className="App ficha-de-personagem container">
      <div className="ficha">
        <Header
          scales={scales}
          setInitialPoints={setInitialPoints}
          points={points}
        />

        <form className="row" name="ficha" noValidate>
          <Characteristics
            strength={strength}
            setStrength={setStrength}
            dexterity={dexterity}
            setDexterity={setDexterity}
            constitution={constitution}
            setConstitution={setConstitution}
            armor={armor}
            setArmor={setArmor}
            distanceAttacks={distanceAttacks}
            setDistanceAttacks={setDistanceAttacks}
            experience={experience}
            setExperience={setExperience}
          />

          <Skills strength={strength} />

          {/* <Advantages
            advantages={advantages}
            setAdvantages={setAdvantages}
            disadvantages={disadvantages}
            setDisadvantages={setDisadvantages}
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
          </div> */}
        </form>
      </div>
    </Container>
  );
}
