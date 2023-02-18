import './Home.scss';

export const Home = () => {
  return (
    <>
      <h1 className="home-title">PokéSite</h1>
      <div className="search">
        <input
          className="search-input"
          type="search"
          placeholder='search pokemon' />
        <button data-testid="button" className="search-button">Search</button>
      </div>
    </>
  )
}