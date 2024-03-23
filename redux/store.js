import {createStore} from 'redux';

import stateHandler from './reducers/stateHandler.js';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore(
  {
    reducer:stateHandler
  }
);

export default store;