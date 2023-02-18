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
        <img src={data.img} alt={`poke-${data.name}`} />
      </ul>
    </div>
  );
};

