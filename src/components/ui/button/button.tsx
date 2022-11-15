import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'white';
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type}
      disabled={props.disabled}
      data-variant={props.variant}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'blue',
}

export default Button