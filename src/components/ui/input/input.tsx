import React, { InputHTMLAttributes } from 'react';
import styles from './input.module.css';


const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <div className={`${styles.input} ${props.className}`}>
      <label htmlFor={props.name}>{props['aria-label']}</label>
      <input id={props.name} name={props.name} {...props} />
    </div>
  )
}

export default Input