import { IPokeModel } from './../reducers/pokemon';

export const ActionTypes = {
  GET_POKEMON_REQUEST: 'GET_POKEMON_REQUEST',
  GET_POKEMON_SUCCESS: 'GET_POKEMON_SUCCESS'
};

export const getPokemonRequest = (value: number) => {
  return {
    type: ActionTypes.GET_POKEMON_REQUEST,
    payload: value
  }
};

export const getPokemonSuccess = (data: IPokeModel[], pagination: number) => {
  return {
    type: ActionTypes.GET_POKEMON_SUCCESS,
    payload: { data, pagination }
  }
};