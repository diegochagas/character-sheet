import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Advantages from '../pages/Advantages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/advantages" component={Advantages} />
    </Switch>
  );
}
