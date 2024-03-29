import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

import Attribute from '../../../components/Attribute';
import Points from '../../../components/Points';

function Characteristics({
  strength,
  setStrength,
  skills,
  setSkills,
  constitution,
  setConstitution,
  armor,
  setArmor,
  firePower,
  setFirePower,
  experience,
  setExperience,
}) {
  const [lifePoints, setLifePoints] = useState(1);
  const [magicPoints, setMagicPoints] = useState(1);
  const [lostLifePoints, setLostLifePoints] = useState(0);
  const [lostMagicPoints, setLostMagicPoints] = useState(0);

  function updateConstitution(value) {
    setConstitution(value);
    setLifePoints(value ? value * 5 : 1);
    setMagicPoints(value ? value * 5 : 1);
  }

  return (
    <div className="caracteristicas col-xs-12 col-sm-6">
      <h2>Características</h2>

      <Attribute
        name="strength"
        label="Força"
        value={strength}
        setAttribute={setStrength}
        experience={experience}
      />

      <Attribute
        name="skills"
        label="Habilidade"
        value={skills}
        setAttribute={setSkills}
        experience={experience}
      />

      <Attribute
        name="constitution"
        label="Resistência"
        value={constitution}
        setAttribute={value => updateConstitution(value)}
        experience={experience}
      />

      <Attribute
        name="armor"
        label="Armadura"
        value={armor}
        setAttribute={setArmor}
        experience={experience}
      />

      <Attribute
        name="firePower"
        label="Poder De Fogo"
        value={firePower}
        setAttribute={setFirePower}
        experience={experience}
      />

      <div className="pontos">
        <Points
          points={lifePoints}
          lostPoints={lostLifePoints}
          setLostPoints={setLostLifePoints}
          name="lifePoints"
        >
          Pontos de <span>v</span>ida
        </Points>

        <Points
          points={magicPoints}
          lostPoints={lostMagicPoints}
          setLostPoints={setLostMagicPoints}
          name="magicPoints"
        >
          Pontos de <span>m</span>agia
        </Points>

        <Points points={experience} setPoints={setExperience} name="experience">
          Pontos de <span>e</span>xperiência
        </Points>
      </div>
    </div>
  );
}

Characteristics.propTypes = {
  strength: PropTypes.number.isRequired,
  setStrength: PropTypes.func.isRequired,
  skills: PropTypes.number.isRequired,
  setSkills: PropTypes.func.isRequired,
  constitution: PropTypes.number.isRequired,
  setConstitution: PropTypes.func.isRequired,
  armor: PropTypes.number.isRequired,
  setArmor: PropTypes.func.isRequired,
  firePower: PropTypes.number.isRequired,
  setFirePower: PropTypes.func.isRequired,
  experience: PropTypes.number.isRequired,
  setExperience: PropTypes.func.isRequired,
};

export default Characteristics;
