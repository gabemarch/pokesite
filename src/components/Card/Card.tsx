import './Card.scss';
import Skeleton from '@material-ui/lab/Skeleton';
export const Card = ({ data, loading }: any) => {
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
          <button className="poke-list-item-button" onClick={() => { }}>See more</button>
        </ul>
      </div>
  );
};

