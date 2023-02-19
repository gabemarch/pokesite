import { render, screen, fireEvent } from '@testing-library/react'
import { Home } from './Home'

describe('<Home />', () => {
  test('render title text', () => {
    render(<Home />)
    expect(screen.getByText('PokéSite')).toBeInTheDocument();
  })

  test('render search input with a button', () => {
    render(<Home />)

    expect(screen.getByPlaceholderText('Search pokemon')).toBeInTheDocument();

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    expect(screen.getByText('Search')).toBeInTheDocument();
  })
})