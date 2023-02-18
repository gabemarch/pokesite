import { applyMiddleware } from 'redux';
// import { ActionTypes, getPokemonRequest, getPokemonSuccess } from './pokemon';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();
//@ts-ignore
const mockStore = configureStore(applyMiddleware(sagaMiddleware))
// const mock = new MockAdapter(axios);
const store = mockStore({});

describe('Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('should get pokemons', () => {
    
  })
})