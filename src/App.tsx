import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonRequest } from './shared/actions/pokemon';
import { Home } from './pages/Home';
import { Card } from './components/Card';
import './App.scss'
import { Pagination, Skeleton } from '@material-ui/lab';
import { PokemonState, PokeModel } from './shared/typings/pokeTypes';
import { Modal } from './components/Modal';
export interface AppState {
  pokemon: PokemonState;
}

export interface GeneralState {
  general: any
}


const App = () => {

  const loading = useSelector<AppState, any>(
    (state) => state.pokemon.isLoading,
  );

  const statusModal = useSelector<GeneralState, boolean>(
    (state) => state.general.isModalOpen,
  );

  const pokes = useSelector<AppState, PokeModel[]>(
    (state) => state.pokemon.pokemons,
  );

  const pagination = useSelector<AppState, number>(
    (state) => state.pokemon.pages,
  );

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
      {statusModal ?
        <div className="modal-container">
          <Modal />
        </div> :
        null
      }
      {loading === 'loaded' ?
        <>
          <div className="card-container">
            {pokes.map((data) => (
              <Card key={data.id} data={data} loading={loading} />
            ))}
          </div>
          <div className="app-pagination">
            <Pagination
              showFirstButton
              showLastButton
              count={Math.ceil(pagination / 20)}
              onChange={handlePagination}
              disabled={loading === 'loading'}
            />
          </div>
        </> :
        <div className="app-spinner">
          <Skeleton animation="wave" variant="circle" width={96} height={96} />
        </div>
      }
    </div>
  );
};

export default App;
