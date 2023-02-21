import { ActionTypes, searchPokemon } from './../actions/pokemon';
import { call, put, delay, all, takeLatest } from 'redux-saga/effects';
import api from '../api/pokemon';

export function* getPokemon(action: any) {
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

export function* searchPokemonSaga(action: any) {
  try {
    const { data } = yield call(api.get, `/pokemon/${action?.payload}`);
    console.log('DATA SAGA', data)
    yield delay(1000);
    yield put({
      type: ActionTypes.SEARCH_POKEMON_SUCCESS,
      payload: {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        types: data.types,
        stats: data.data,
        abilities: data.abilities,
      },
    })
  } catch (err) {
    yield put({
      type: ActionTypes.SEARCH_POKEMON_FAILURE,
    });
  }
}

export default function* pokemonSagas() {
  yield takeLatest(ActionTypes.GET_POKEMON_REQUEST, getPokemon);
  yield takeLatest(ActionTypes.SEARCH_POKEMON, searchPokemonSaga);
};
