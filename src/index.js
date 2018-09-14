import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

import App from './App';
import './index.css';
import marvelApp from './reducers';

function configureStore(rootReducer, preloadedState){
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    )
}


ReactDOM.render(
    <Provider store = {configureStore(marvelApp)}>
  <App />
    </Provider>,
  document.getElementById('root')
);
