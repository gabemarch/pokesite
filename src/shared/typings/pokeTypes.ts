
export interface PokeStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface PokeAbilities {
  ability: {
    name: string;
  };
}

export interface PokeTypes {
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

export interface PokeModel {
  name: string;
  url: string;
  id: number | string;
  img: string;
  types: PokeTypes[];
  stats: PokeStats[];
  abilities: PokeAbilities[];
}

export interface PokemonState {
  isLoading: boolean;
  pokemons: PokeModel[];
  pages: number;
  error: string;
  stats: PokeStats[];
  abilities: PokeAbilities[];
  currentPokemon: any;
}

export enum LoadingStatus {
  LOADING = 'loading',
  LOADED = 'loaded',
}