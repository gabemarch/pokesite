import { useDispatch } from 'react-redux';
import './Card.scss';
import Skeleton from '@material-ui/lab/Skeleton';
import { getCurrentPokemon } from '../../shared/actions/pokemon';
import { handleModal } from '../../shared/actions/general';
export const Card = ({ data, loading }: any) => {
  const dispatch = useDispatch()

  const handeClick = () => {
    dispatch(getCurrentPokemon(data.id));
    dispatch(handleModal(true));
  }

  return (
    loading === "loading" ?
      <Skeleton animation="wave" variant="text" width={50} height={25} />
      :
      <div className="card">
        <ul className="poke-list">
          <li
            className="poke-list-item"
            key={data.id}>
            {data.name}
          </li>
          <img
            className="poke-list-item-image"
            src={data.img}
            alt={`poke-${data.name}`} />
          <button className="poke-list-item-button" onClick={handeClick}>See more</button>
        </ul>
      </div>
  );
};

