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

export interface IPokemonState {
  pokemons: IPokeModel[];
  pages: number;
  error: string;
  stats: IPokeStats[];
  abilities: IPokeAbilities[];
  currentPokemon: any;
}

export const INITIAL_STATE_POKE: IPokemonState = {
  pokemons: [],
  pages: 0,
  error: '',
  stats: [],
  abilities: [],
  currentPokemon: {},
};

export const pokemonReducer = (state: IPokemonState = INITIAL_STATE_POKE, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_POKEMON_SUCCESS:
      return {
        ...state,
        pokemons: action.payload.data
      };
    default:
      return state;
  }
};
