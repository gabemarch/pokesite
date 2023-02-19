import './Button.scss';

export const Button = ({ text, disabled, colorType, onClick }: any) => {
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