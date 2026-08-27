import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import AddCharacter from '../pages/AddCharacter';
import Advantages from '../pages/Advantages';
import CharacterSheet from '../pages/CharacterSheet';
import DeleteCharacter from '../pages/DeleteCharacter';
import EditCharacter from '../pages/EditCharacter';
import Home from '../pages/Home';
import Rules from '../pages/Rules';

export default function Routes() {
  return (
    <div className="container container-ficha">
      <div className="ficha">
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/add-character" element={<AddCharacter />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/character-sheet" element={<CharacterSheet />} />
          <Route path="/delete-character" element={<DeleteCharacter />} />
          <Route path="/edit-character" element={<EditCharacter />} />
          <Route path="/rules" element={<Rules />} />
        </Switch>
      </div>
    </div>
  );
}
