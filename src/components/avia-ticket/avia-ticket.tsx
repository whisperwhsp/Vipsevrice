import React from 'react';
import { IAviaTicket } from '../../models/IAviaTicket';
import AviaTicketTime from './avia-ticket-time';
import styles from './avia-ticket.module.css';

const AviaTicket: React.FC<IAviaTicket> = (props: IAviaTicket) => {
  const [selectedTime, setSelectedTime] = React.useState<number>(0);
  const handleSelectTime = (index: number) => setSelectedTime(index);

  React.useEffect(() => {
    console.log(selectedTime);
  }, [selectedTime])
  
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.type}>{props.type}</div>
        <div className={styles.logo}>{props.firm}</div>
      </div>
      <div>
        <AviaTicketTime
          times={props.possibleTimes}
          selected={selectedTime}
          setSelected={handleSelectTime}
        />
      </div>
      <div></div>
    </div>
  )
}

export default AviaTicket