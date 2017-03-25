import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './App'
import api from './api'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer as refreshReducer } from 'redux-refresh-token'
import tokenReducer from './tokenReducer'

const store = createStore(
  combineReducers({
    tokenRefresh: refreshReducer,
    token: tokenReducer
  }),
  {},
  applyMiddleware(thunk, api, createLogger())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
