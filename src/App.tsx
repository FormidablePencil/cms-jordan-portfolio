import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { CrystalParallaxProvider } from 'parallax-effect';
import Routes from './Routes';
import './App.css';
import 'parallax-effect/dist/index.css'
// fetch data from here to a server yet to be created

function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <CrystalParallaxProvider>
        <Routes />
      </CrystalParallaxProvider>
    </Provider>
  );
}

export default App;
