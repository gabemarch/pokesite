import { useCallback, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getPokemonRequest } from './shared/actions/pokemon';
import { Home } from './pages/Home';
import { Card } from './components/Card';
import { IPokeModel, IPokemonState } from './shared/reducers/pokemon';
import { PaginationButton } from './components/PaginationButton';
import './App.scss'
export interface IState {
  pokemon: IPokemonState;
}

const App = () => {
  const pokes = useSelector<IState, IPokeModel[]>(
    (state) => state.pokemon.pokemons,
  );

  const dispatch = useDispatch();

  const actionGetPokes = useCallback(() => {
    dispatch(getPokemonRequest());
  }, [dispatch]);

  useEffect(() => {
    actionGetPokes();
  }, [actionGetPokes]);

  return (
    <div className="app">
      <Home />
      <div className="card-container">
        {pokes.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      <div className="app-pagination">
        <PaginationButton />
      </div>
    </div>
  );
};

export default connect(
  ({ pokemon }) => ({ pokemon }),
  {
    getPokemonRequest
  }
)(App);
