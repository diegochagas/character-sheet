import React, { useState } from 'react';

// import { Container } from './styles';
import { types, spells } from '../../../services/api';
import Select from '../../../components/Select';
import TextArea from '../../../components/TextArea';

export default function Skills() {
  const [damageTypes, setDamageTypes] = useState(
    types.map(damage => damage.type).sort()
  );
  const [choosenTypes, setChoosenTypes] = useState([]);
  const [knownSpells, setKnownSpells] = useState(
    spells.map(spell => spell.name).sort()
  );
  const [choosenSpells, setChoosenSpells] = useState([]);

  return (
    <div className="habilidades col-xs-12 col-sm-6">
      <div className="form-group">
        <h3>Tipos de dano</h3>

        <Select
          defaultOption="-- Tipos de dano --"
          items={damageTypes}
          setItems={setDamageTypes}
          choosen={choosenTypes}
          setChoosen={setChoosenTypes}
        />

        <TextArea
          items={damageTypes}
          setItems={setDamageTypes}
          choosen={choosenTypes}
          setChoosen={setChoosenTypes}
          rows="2"
        />
      </div>

      <div className="form-group">
        <h3>Magias conhecidas</h3>

        <Select
          defaultOption="-- Magias conhecidas --"
          items={knownSpells}
          setItems={setKnownSpells}
          choosen={choosenSpells}
          setChoosen={setChoosenSpells}
        />

        <TextArea
          items={knownSpells}
          setItems={setKnownSpells}
          choosen={choosenSpells}
          setChoosen={setChoosenSpells}
          rows="4"
        />
      </div>

      <div className="form-group has-feedback">
        <h3>Dinheiro e itens</h3>

        <TextArea rows="5" />
      </div>
    </div>
  );
}
