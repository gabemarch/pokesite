import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button';

describe('Button', () => {
  const cases = [
    ['primary', 'btn button-primary'],
    ['default', 'btn button-default'],
    ['warning', 'btn button-warning'],
    ['error', 'btn button-error'],
  ]
  test('Button click', () => {
    const onClick = jest.fn();
    render(<Button text="Click" disabled={false} className="btn button-primary" onClick={onClick} colorType='' />);
    const buttonElement = screen.getByText('Click');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  })
  test.each(cases)('checks the button color of %p', (colorType, expectedResult) => {
    const onClick = jest.fn();
    render(<Button text="Click" disabled={false} onClick={onClick} colorType={colorType} />);
    expect(screen.getByRole('button')).toHaveClass(expectedResult);
  })
})