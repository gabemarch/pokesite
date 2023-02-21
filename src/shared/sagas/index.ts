import { all, fork } from 'redux-saga/effects';
import pokemonSagas from './pokemon';

export default function* rootSaga() {
  yield all([fork(pokemonSagas)]);
}
