import { useDispatch, useSelector } from 'react-redux';
import { PokeModel, PokemonState } from '../../shared/typings/pokeTypes';
import { handleModal } from '../../shared/actions/general';
import './Modal.scss';

export interface State {
  pokemon: PokemonState;
}

export const Modal = () => {
  const dispatch = useDispatch()
  const currentPokemonDetail = useSelector<State, PokeModel>(state => state.pokemon.currentPokemon)

  const onClose = () => {
    dispatch(handleModal(false))
  }

  return (
    <>
      <div data-testid="modal" className="modal">
        <div className="modal-left">
          <h2 className="modal-left-title">{currentPokemonDetail.name}</h2>
          <img className="modal-left-image" src={currentPokemonDetail.img} alt="" />
        </div>
        <div data-testid="modal-content" className="modal-content">
          <div className="types">
            <span>Type:</span>
            {currentPokemonDetail.types.map((type) => (
              <ul className="types-list">
                <li className="types-list-item">{type.type.name}</li>
              </ul>
            ))}
          </div>
          {currentPokemonDetail.stats.map((stat) => (
            <ul className="stats-list">
              <li className="stats-list-item">{`${stat.stat.name}: ${stat.base_stat}`}</li>
            </ul>
          ))}
          <div className="abilities">
            <span>Abilities: </span>
            {currentPokemonDetail.abilities.map((ability) => (
              <ul className="abilities-list">
                <li className="abilities-list-item">{ability.ability.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <button
        className="modal-button"
        onClick={onClose}>
        Close
      </button>
    </>
  )
}