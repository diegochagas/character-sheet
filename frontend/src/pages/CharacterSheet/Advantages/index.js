import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';
import {
  races,
  classes,
  advantages,
  disadvantages,
} from '../../../services/api';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';

function Advantages({ totalAdvantages, setTotalAdvantages }) {
  const [uniqueAdvantages, setUniqueAdvantages] = useState(
    races.map(race => race.label).sort()
  );
  const [kits, setKits] = useState(classes.map(cls => cls.label).sort());
  const [advantagesList, setAdvantagesList] = useState(
    advantages.map(advantage => advantage.label).sort()
  );
  const [choosen, setChoosen] = useState([]);
  const [disadvantagesList, setDisAdvantagesList] = useState(
    disadvantages.map(disadvantage => disadvantage.label).sort()
  );
  const [choosenDisadvantage, setChoosenDisadvantage] = useState([]);
  const [choosenKits, setChoosenKits] = useState([]);

  function addAdvantage(option) {
    const race = races.find(raceDetails => raceDetails.label === option);
    if (race) setTotalAdvantages(totalAdvantages + race.value);

    const choosenKit = classes.find(cls => cls.label === option);
    if (choosenKit) {
      setChoosenKits([...choosenKits, choosenKit]);

      for (let i = 0; i < choosenKits.length; i++) {
        setTotalAdvantages(totalAdvantages + choosenKits.length);
      }
    }

    const advantage = advantages.find(
      advantageDetails => advantageDetails.label === option
    );
    if (advantage) setTotalAdvantages(totalAdvantages + advantage.value);

    const disadvantage = disadvantages.find(
      disadvantageDetails => disadvantageDetails.label === option
    );
    if (disadvantage) setTotalAdvantages(totalAdvantages + disadvantage.value);
  }

  function removeAdvantage(option) {
    const race = races.find(raceDetails => raceDetails.label === option);

    if (race) setTotalAdvantages(totalAdvantages - race.value);

    const newChoosenKits = choosenKits.filter(cls => cls.label !== option);
    if (newChoosenKits.length < choosenKits.length) {
      setTotalAdvantages(totalAdvantages - choosenKits.length + 1);

      setChoosenKits(newChoosenKits);
    }

    const advantage = advantages.find(
      advantageDetails => advantageDetails.label === option
    );
    if (advantage) setTotalAdvantages(totalAdvantages - advantage.value);

    const disadvantage = disadvantages.find(
      disadvantageDetails => disadvantageDetails.label === option
    );
    if (disadvantage) setTotalAdvantages(totalAdvantages - disadvantage.value);
  }

  function updateListState(states, setState, item, originals) {
    if (
      originals.find(original => original.label === item) &&
      !states.find(state => state === item)
    ) {
      setState([...states, item].sort());
    }
  }

  function setAllAdvantages(items) {
    items.forEach(item => {
      updateListState(advantagesList, setAdvantagesList, item, advantages);

      updateListState(uniqueAdvantages, setUniqueAdvantages, item, races);

      updateListState(kits, setKits, item, classes);
    });
  }

  return (
    <div className="vantagens-desvantagens col-xs-12 col-sm-6">
      <div className="form-group">
        <h2>Vantagens</h2>

        <Select
          defaultOption="-- Vantagens únicas --"
          items={uniqueAdvantages}
          setItems={setUniqueAdvantages}
          choosen={choosen}
          setChoosen={setChoosen}
          addAdvantage={option => addAdvantage(option)}
        />

        <Select
          defaultOption="-- Kits --"
          items={kits}
          setItems={setKits}
          choosen={choosen}
          setChoosen={setChoosen}
          addAdvantage={option => addAdvantage(option)}
        />

        <Select
          defaultOption="-- Vantagens --"
          items={advantagesList}
          setItems={setAdvantagesList}
          choosen={choosen}
          setChoosen={setChoosen}
          addAdvantage={option => addAdvantage(option)}
        />

        <TextArea
          items={[...uniqueAdvantages, ...kits, ...advantagesList]}
          setItems={items => setAllAdvantages(items)}
          choosen={choosen}
          setChoosen={setChoosen}
          rows="6"
          removeAdvantage={option => removeAdvantage(option)}
        />
      </div>

      <div className="form-group">
        <h2>Desvantagens</h2>

        <Select
          defaultOption="-- Desvantagens --"
          items={disadvantagesList}
          setItems={setDisAdvantagesList}
          choosen={choosenDisadvantage}
          setChoosen={setChoosenDisadvantage}
          addAdvantage={option => addAdvantage(option)}
        />

        <TextArea
          items={disadvantagesList}
          setItems={setDisAdvantagesList}
          choosen={choosenDisadvantage}
          setChoosen={setChoosenDisadvantage}
          rows="5"
          removeAdvantage={option => removeAdvantage(option)}
        />
      </div>
    </div>
  );
}

Advantages.propTypes = {
  totalAdvantages: PropTypes.number.isRequired,
  setTotalAdvantages: PropTypes.func.isRequired,
};

export default Advantages;
