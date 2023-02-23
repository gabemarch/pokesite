import { screen, render, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


describe('<Modal />', () => {
  const mockDispatch = jest.fn();
  const mockSelector = jest.fn();
  jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
    useSelector: () => mockSelector()
  }))

  const mockStore = configureStore([])
  const store = mockStore({
    pokemon: {
      currentPokemon: {
        name: 'Pikachu',
        url: 'asd',
        id: 3,
        img: 'dsa',
        types: [],
        stats: [],
        abilities: []
      }
    }
  })

  test('render Modal', () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>)
    const modalElement = screen.getByTestId('modal')
    expect(modalElement).toBeInTheDocument()
  })
  test('should render Modal title', () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>)
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  })
  test('should render Modal content', () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>)
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  })
})