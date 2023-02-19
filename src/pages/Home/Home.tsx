import { Button } from '../../elements/Button';
import './Home.scss';

export const Home = () => {
  return (
    <>
      <h1 className="home-title">PokéSite</h1>
      <div className="search">
        <input
          className="search-input"
          type="search"
          placeholder='Search pokemon' />
        <Button
          data-testid="button"
          colorType="primary"
          className="search-button"
          text="Search" />
      </div>
    </>
  )
}