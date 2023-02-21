import { ActionTypes } from './../actions/pokemon';
import { takeEvery, call, put, fork, delay, all } from 'redux-saga/effects';
import * as actions from '../actions/pokemon';
import api from '../api/pokemon';

function* getPokemon(action: any) {
  const offsetLimit = (action?.payload - 1) * 20;
  try {
    const { data } = yield call(api.get, `/pokemon?offset=${offsetLimit}`);

    yield delay(1000);

    // @ts-ignore
    const responses = yield all(
      data.results.map((item: any) => call(api.get, item.url)),
    );

    const getOnlyData = responses.map((item: any) => ({
      id: item.data.id,
      name: item.data.name,
      img: item.data.sprites.front_default,
      types: item.data.types,
      stats: item.data.stats,
      abilities: item.data.abilities,
    }));

    yield put({
      type: ActionTypes.GET_POKEMON_SUCCESS,
      payload: { pagination: data.count, data: getOnlyData },
    });

  } catch (error) {
    console.error(error);
  }
}

function* watchGetPokemonRequest() {
  yield takeEvery(actions.ActionTypes.GET_POKEMON_REQUEST, getPokemon);
}

const pokemonSagas = [fork(watchGetPokemonRequest)];

export default pokemonSagas;
