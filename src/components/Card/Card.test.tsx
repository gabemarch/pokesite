import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('<Card />', () => {
  const pokeMock = {
    id: 1,
    name: 'test',
    img: 'http://example.com/1.png'
  }

  test('it should render item name', () => {
    render(<Card data={pokeMock} />)
    expect(screen.getByText(pokeMock.name)).toBeInTheDocument();
  })

  test('it should render item image', () => {
    render(<Card data={pokeMock} />)
    expect(screen.getByAltText('poke-test')).toBeInTheDocument();
  })
})