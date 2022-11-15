import React from 'react';
import Button from '../ui/button/button';
import styles from './avia-ticket.module.css';

interface IProps {
  times: string[],
  selected: number,
  setSelected: (index: number) => void
}

const AviaTicketTime: React.FC<IProps> = (props) => {
  return (
    <div className={styles.buttonGroup}>
      {props.times.map((el, index) => (
        <Button
          variant='white'
          onClick={() => props.setSelected(index)}
          disabled={props.selected === index}
        >
          {el}
        </Button>
      ))}
   </div>
  )
}

export default AviaTicketTime