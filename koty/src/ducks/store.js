import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { catsReducer } from './cats/reducers';
import { breedsReducer } from './breeds/reducers';
import logger from 'redux-logger';
import { createMiddleware } from 'redux-api-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  cats: catsReducer,
  breeds: breedsReducer
  });

const store = createStore(combinedReducers, 
  composeEnhancers(applyMiddleware(thunk, createMiddleware(), logger)),
  );

  export default store;