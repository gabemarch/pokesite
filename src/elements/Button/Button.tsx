import './Button.scss';

export interface ButtonProps {
  className?: string,
  type?: string,
  text: string,
  disabled: boolean,
  colorType: string,
  onClick: () => void
}

export const Button = ({ text, disabled, colorType, onClick }: ButtonProps) => {
  let color = 'default';
  switch (colorType) {
    case 'primary':
      color = 'primary'
      break;
    case 'warning':
      color = 'warning'
      break;
    case 'error':
      color = 'error'
      break;
    default:
      color = 'default'
  }

  return (
    <button
      disabled={disabled}
      className={`btn button-${color}`}
      onClick={onClick}>
      {text}
    </button>
  )
}