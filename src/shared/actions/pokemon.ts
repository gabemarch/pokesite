import { PokeModel } from "../typings/pokeTypes";

export const ActionTypes = {
  GET_POKEMON_REQUEST: 'GET_POKEMON_REQUEST',
  GET_POKEMON_SUCCESS: 'GET_POKEMON_SUCCESS',
  SEARCH_POKEMON: 'SEARCH_POKEMON',
  SEARCH_POKEMON_SUCCESS: 'SEARCH_POKEMON_SUCCESS',
  SEARCH_POKEMON_FAILURE: 'SEARCH_POKEMON_FAILURE'
};

export const getPokemonRequest = (value: number) => ({
  type: ActionTypes.GET_POKEMON_REQUEST,
  payload: value
});

export const getPokemonSuccess = (data: PokeModel[], pagination: number) => ({
  type: ActionTypes.GET_POKEMON_SUCCESS,
  payload: { data, pagination }
});

export const searchPokemon = (data: string) => ({
  type: ActionTypes.SEARCH_POKEMON,
  payload: data
});

export const searchPokemonSuccess = (data: PokeModel) => ({
  type: ActionTypes.SEARCH_POKEMON_SUCCESS,
  payload: data
});

export const searchPokemonFailure = () => ({
  type: ActionTypes.SEARCH_POKEMON_FAILURE
});
