import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
          <Route path="/" exact component={Home} />
          <Route path="/add-character" component={AddCharacter} />
          <Route path="/advantages" component={Advantages} />
          <Route path="/character-sheet" component={CharacterSheet} />
          <Route path="/delete-character" component={DeleteCharacter} />
          <Route path="/edit-character" component={EditCharacter} />
          <Route path="/rules" component={Rules} />
        </Switch>
      </div>
    </div>
  );
}
