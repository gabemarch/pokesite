import { IPokeModel } from './../reducers/pokemon';

export const ActionTypes = {
  IS_LOADING: 'IS_LOADING',
  GET_POKEMON_REQUEST: 'GET_POKEMON_REQUEST',
  GET_POKEMON_SUCCESS: 'GET_POKEMON_SUCCESS'
};

export const isLoading = (isLoading: boolean) => ({
  type: ActionTypes.IS_LOADING,
  payload: isLoading
})

export const getPokemonRequest = (value: number) => ({
  type: ActionTypes.GET_POKEMON_REQUEST,
  payload: value
});

export const getPokemonSuccess = (data: IPokeModel[], pagination: number) => ({
  type: ActionTypes.GET_POKEMON_SUCCESS,
  payload: { data, pagination }
});
