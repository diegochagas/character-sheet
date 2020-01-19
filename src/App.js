import React from 'react';
import { Router } from 'react-router-dom';

import './css/App.css';
import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './services/history';

export default function App() {
  return (
    <Router history={history}>
      <Routes />

      <GlobalStyle />
    </Router>
  );
}
