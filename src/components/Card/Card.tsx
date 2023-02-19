import { Button } from '../../elements/Button';
import './Card.scss';

export const Card = ({ data }: any) => {
  return (
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
        <button className="poke-list-item-button" onClick={() => {}}>See more</button>
      </ul>
    </div>
  );
};

