import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Header from './Header';
import Characteristics from './Characteristics';
import Skills from './Skills';
import Advantages from './Advantages';
import Description from './Description';
import { scales } from '../../services/api';

export default function CharacterSheet() {
  const [initialPoints, setInitialPoints] = useState(0);
  const [points, setPoints] = useState(0);
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [armor, setArmor] = useState(0);
  const [distanceAttacks, setDistanceAttacks] = useState(0);
  const [totalAdvantages, setTotalAdvantages] = useState(0);
  const [experience, setExperience] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    setPoints(
      initialPoints +
        Math.floor(experience / 10) -
        calculateCharacteristics(strength) -
        calculateCharacteristics(dexterity) -
        calculateCharacteristics(constitution) -
        calculateCharacteristics(armor) -
        calculateCharacteristics(distanceAttacks) -
        totalAdvantages
    );
  }, [
    armor,
    constitution,
    dexterity,
    experience,
    distanceAttacks,
    strength,
    initialPoints,
    totalAdvantages,
  ]);

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

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    alert(JSON.stringify(data));
  }

  return (
    <Container>
      <Header
        scales={scales}
        setInitialPoints={setInitialPoints}
        points={points}
        name={name}
        setName={setName}
      />

      <form className="row" onSubmit={handleSubmit}>
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

        <Skills />

        <Advantages
          totalAdvantages={totalAdvantages}
          setTotalAdvantages={setTotalAdvantages}
        />

        <Description points={points} setPoints={setPoints} />

        <div className="form-group salvar-ficha">
          <button className="btn btn-primary" type="submit" name="botao">
            Salvar personagem
          </button>
        </div>
      </form>
    </Container>
  );
}
