import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore';

import { addExpense }  from './actions/expenses';

import { setTextFilter } from './actions/filters';

const store = configureStore();

console.log(store.getState());

const jxs = (

  <Provider store={store}>
      <AppRouter />
  </Provider>

);

ReactDOM.render(jxs, document.getElementById('app'));