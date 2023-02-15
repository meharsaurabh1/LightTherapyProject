import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './Components/App';

import StateReducer from './reducers';

const store = createStore(StateReducer);

console.log('INTIAL STATE', store.getState());

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);

