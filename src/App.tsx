import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
/* //~ parallax-effect is an open source library I created for this project. Repo: https://github.com/FormidablePencil/parallax-effect-crystals */
import Routes from "./Routes";
import "./App.css";
import "parallax-effect-crystals/dist/index.css";
// fetch data from here to a server yet to be created

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
