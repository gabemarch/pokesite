import { ActionTypes, getPokemonRequest, getPokemonSuccess } from './pokemon';

const mockData = {
  value: 1,
  data: [],
  pagination: 111
}

describe('Actions', () => {
  test('should get getPokemonRequest action', () => {
    expect(getPokemonRequest(mockData.value).type).toEqual(ActionTypes.GET_POKEMON_REQUEST)
  })
  test('should get getPokemonSuccess action', () => {
    expect(getPokemonSuccess(mockData.data, mockData.pagination).type).toEqual(ActionTypes.GET_POKEMON_SUCCESS);
  })
})