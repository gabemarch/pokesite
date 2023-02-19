import { render, screen } from '@testing-library/react';
import App from './App';

const mockData = {
  id: 1,
  name: 'test',
  img: 'http://example.com/1.png',
  types: [],
  stats: [],
  abilities: [] 
}

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

const mockHomeComponent = jest.fn();
jest.mock('./pages/Home', () => (props: any) => {
  mockHomeComponent(props);
});

const mockCardComponent = jest.fn();
jest.mock('./components/Card', () => (props: any) => {
  mockCardComponent(props)
})

describe('<App/>', () => {
  test('renders <Home /> component', () => {
  });
  // test('')  
})
