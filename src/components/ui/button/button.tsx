import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button