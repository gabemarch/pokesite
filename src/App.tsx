import { useCallback, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getPokemonRequest } from './shared/actions/pokemon';
import { Home } from './pages/Home';
import { Card } from './components/Card';
import { IPokeModel, IPokemonState } from './shared/reducers/pokemon';
import './App.scss'
import { Pagination } from '@material-ui/lab';
export interface IState {
  pokemon: IPokemonState;
}

const App = () => {
  const pokes = useSelector<IState, IPokeModel[]>(
    (state) => state.pokemon.pokemons,
  );

  const pagination = useSelector<IState, number>(
    (state) => state.pokemon.pages,
  );

  console.log('PAGI', pagination)

  const dispatch = useDispatch();

  const actionGetPokes = useCallback(() => {
    dispatch(getPokemonRequest(1));
  }, [dispatch]);

  useEffect(() => {
    actionGetPokes();
  }, [actionGetPokes]);


  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    dispatch(getPokemonRequest(value));
  };

  return (
    <div className="app">
      <Home />
      <div className="card-container">
        {pokes.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      <div className="app-pagination">
        <Pagination
          showFirstButton
          showLastButton
          count={Math.ceil(pagination / 20)}
          onChange={handlePagination}
        />
      </div>
    </div>
  );
};

export default App;
