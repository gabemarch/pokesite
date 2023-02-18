export const ActionTypes = {
  GET_POKEMON_REQUEST: 'GET_POKEMON_REQUEST',
  GET_POKEMON_SUCCESS: 'GET_POKEMON_SUCCESS'
};

export const getPokemonRequest = () => ({
  type: ActionTypes.GET_POKEMON_REQUEST
});

export const getPokemonSuccess = (data: any) => ({
  type: ActionTypes.GET_POKEMON_SUCCESS,
  payload: { data }
});
