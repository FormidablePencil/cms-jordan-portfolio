import React from 'react';
import './App.css';
import Cms from './Cms'
import { Provider } from 'react-redux';
import configureStore from './store';

function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <Cms />
    </Provider>
  );
}

export default App;
