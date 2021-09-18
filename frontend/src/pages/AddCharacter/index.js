import React, { useState, useEffect } from 'react';

import { Container } from '../CharacterSheet/styles';

import Header from '../CharacterSheet/Header';
import Characteristics from '../CharacterSheet/Characteristics';
import { scales, getCharacters, postCharacter } from '../../services/api';

function AddCharacter() {
  const [initialPoints, setInitialPoints] = useState(0);
  const [points, setPoints] = useState(0);
  const [strength, setStrength] = useState(0);
  const [skills, setSkills] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [armor, setArmor] = useState(0);
  const [firePower, setFirePower] = useState(0);
  const [experience, setExperience] = useState(0);
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getChars() {
      const response = await getCharacters();

      setCharacters(response.data);
    }

    getChars();
  }, []);

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

  useEffect(() => {
    setPoints(
      initialPoints +
        Math.floor(experience / 10) -
        calculateCharacteristics(strength) -
        calculateCharacteristics(skills) -
        calculateCharacteristics(constitution) -
        calculateCharacteristics(armor) -
        calculateCharacteristics(firePower)
    );
  }, [
    armor,
    constitution,
    skills,
    experience,
    firePower,
    strength,
    initialPoints,
  ]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      id: characters.length,
      name,
      strength,
      skills,
      constitution,
      armor,
      firePower,
    };

    await postCharacter(data);

    setName('');

    setStrength(0);

    setSkills(0);

    setConstitution(0);

    setArmor(0);

    setFirePower(0);

    alert(`Character ${data.name} added with sucess!`);
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
          skills={skills}
          setSkills={setSkills}
          constitution={constitution}
          setConstitution={setConstitution}
          armor={armor}
          setArmor={setArmor}
          firePower={firePower}
          setFirePower={setFirePower}
          experience={experience}
          setExperience={setExperience}
        />

        <div className="form-group salvar-ficha">
          <button className="btn btn-primary" type="submit" name="botao">
            Create
          </button>
        </div>
      </form>
    </Container>
  );
}

export default AddCharacter;
