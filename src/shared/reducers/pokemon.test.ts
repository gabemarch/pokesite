import { getPokemonSuccess } from "../actions/pokemon";
import { initialState, pokemonReducer } from "./pokemon";

describe("Pokemon reducer", () => {
  test('sets the get Pokemon state', () => {
    const state = pokemonReducer(
      initialState,
      getPokemonSuccess([], 0)
    )
    expect(state).toEqual(
      initialState
    )
  });
})