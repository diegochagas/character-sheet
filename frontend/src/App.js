import React from 'react';
/* import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'; */
import { HashRouter } from 'react-router-dom';

import Routes from './routes';
import Navbar from './components/Navbar'
import history from './services/history';

// import { store, persistor } from './store';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      {/* <Provider store={store}>
        <PersistGate persistor={persistor}> */}
      <HashRouter history={history}>
        <Navbar />

        <Routes />

        <GlobalStyle />
      </HashRouter>
      {/* </PersistGate>
      </Provider> */}
    </>
  );
}
