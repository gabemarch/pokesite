import { all } from 'redux-saga/effects';
import pokemonSagas from './pokemon';

export default function* rootSaga() {
  yield all([...pokemonSagas]);
}
