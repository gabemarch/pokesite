import { ActionTypes, getPokemonRequest, getPokemonSuccess, searchPokemon, searchPokemonSuccess, searchPokemonFailure } from './pokemon';

const mockData = {
  value: 1,
  data: [{
    name: 'pikachu',
    url: 'asd/asd.com',
    id: 1,
    img: 'https://asd.com/1.png',
    types: [],
    stats: [],
    abilities: []
  }],
  searchedData: {
    name: 'pikachu',
    url: 'asd/asd.com',
    id: 1,
    img: 'https://asd.com/1.png',
    types: [],
    stats: [],
    abilities: []
  },
  pagination: 111,
  search: 'asd'
}

describe('Actions', () => {
  test('should get getPokemonRequest action', () => {
    expect(getPokemonRequest(mockData.value).type).toEqual(ActionTypes.GET_POKEMON_REQUEST);
  })
  test('should get getPokemonSuccess action', () => {
    expect(getPokemonSuccess(mockData.data, mockData.pagination).type).toEqual(ActionTypes.GET_POKEMON_SUCCESS);
  })
  test('should get searchPokemon action', () => {
    expect(searchPokemon(mockData.search).type).toEqual(ActionTypes.SEARCH_POKEMON);
  })
  test('should get searchPokemonSuccess action', () => {
    expect(searchPokemonSuccess(mockData.searchedData).type).toEqual(ActionTypes.SEARCH_POKEMON_SUCCESS);
  })
  test('should get searchPokemonFailure action', () => {
    expect(searchPokemonFailure().type).toEqual(ActionTypes.SEARCH_POKEMON_FAILURE);
  })
})
