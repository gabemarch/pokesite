import { isLoading } from './../actions/pokemon';
import { ActionTypes } from '../actions/pokemon';

export interface IPokeStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface IPokeAbilities {
  ability: {
    name: string;
  };
}

export interface IPokeTypes {
  slot: number;
  type: {
    name:
    | 'grass'
    | 'fire'
    | 'water'
    | 'bug'
    | 'normal'
    | 'poison'
    | 'electric'
    | 'ground'
    | 'fairy'
    | 'fighting'
    | 'flying'
    | 'rock';
    url: string;
  };
}

export interface IPokeModel {
  name: string;
  url: string;
  id: number | string;
  img: string;
  types: IPokeTypes[];
  stats: IPokeStats[];
  abilities: IPokeAbilities[];
}

export interface PokemonState {
  isLoading: boolean;
  pokemons: IPokeModel[];
  pages: number;
  error: string;
  stats: IPokeStats[];
  abilities: IPokeAbilities[];
  currentPokemon: any;
}

export enum LoadingStatus {
  LOADING = 'loading',
  LOADED = 'loaded',
}

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
    case ActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    case ActionTypes.GET_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: LoadingStatus.LOADED,
        pokemons: action.payload.data,
        pages: action.payload.pagination
      };
    default:
      return state;
  }
};
