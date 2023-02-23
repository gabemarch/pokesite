import { ActionTypes } from '../actions/pokemon';
import { PokemonState, LoadingStatus } from '../typings/pokeTypes';


export const initialState: PokemonState = {
  isLoading: false,
  pokemons: [],
  pages: 0,
  error: '',
  stats: [],
  abilities: [],
  currentPokemon: {},
};

export const pokemonReducer = (state: PokemonState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: LoadingStatus.LOADED,
        pokemons: action.payload.data,
        pages: action.payload.pagination
      };
    case ActionTypes.SEARCH_POKEMON:
      return {
        ...state,
        isLoading: LoadingStatus.LOADING
      }
    case ActionTypes.SEARCH_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: LoadingStatus.LOADED,
        pokemons: [action.payload],

      }
    case ActionTypes.SEARCH_POKEMON_FAILURE:
      return {
        ...state,
        isLoading: LoadingStatus.LOADED,
        pokemons: [],
        error: 'Error'
      }
    case ActionTypes.GET_CURRENT_POKEMON:
      return {
        ...state,
        currentPokemon: state.pokemons.find(item => item.id === action.payload.id)
      }
    default:
      return state;
  }
};
