import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';
import Navbar from './components/Navbar';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes />

      <GlobalStyle />
    </HashRouter>
  );
}
