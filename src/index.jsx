import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'material-design-lite/material.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Game from './components/Game';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('react-app'),
);
